# Design Document: Open Source Commercialization

## Overview

This design outlines the architecture and implementation strategy for transforming the UIED navigation system into a dual-track open-source and commercial product. The system will maintain a free MIT-licensed open-source version while offering Personal (¥699) and Enterprise (¥2999) versions with advanced features.

The design follows a phased approach:
1. **Phase 1**: Codebase preparation and open-source release infrastructure
2. **Phase 2**: License verification system and Pro feature framework
3. **Phase 3**: Implementation of 5 core Pro features
4. **Phase 4**: Payment integration and order management
5. **Phase 5**: Sales website and user center
6. **Phase 6**: Launch and promotion

Key design principles:
- **Simplicity**: Avoid complex DRM or obfuscation; use simple license key verification
- **Graceful degradation**: System works fully in open-source mode, Pro features enhance but don't break
- **Minimal friction**: Installation wizard and auto-updates reduce technical barriers
- **Clear separation**: Open-source gets full source, Personal gets builds, Enterprise gets source + license

## Architecture

### High-Level System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     UIED Navigation System                   │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Frontend   │  │    Admin     │  │   Backend    │      │
│  │  (React 19)  │  │  (React +    │  │  (Express)   │      │
│  │              │  │   Ant Design)│  │              │      │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘      │
│         │                  │                  │              │
│         └──────────────────┴──────────────────┘              │
│                            │                                 │
│                            ▼                                 │
│                  ┌──────────────────┐                        │
│                  │  License Module  │                        │
│                  │  (Middleware)    │                        │
│                  └────────┬─────────┘                        │
│                           │                                  │
└───────────────────────────┼──────────────────────────────────┘
                            │
                            ▼
              ┌─────────────────────────┐
              │   License Server        │
              │   (Separate Service)    │
              ├─────────────────────────┤
              │ - Key Validation        │
              │ - Feature Entitlements  │
              │ - Expiration Checking   │
              └─────────────────────────┘
                            │
                            ▼
              ┌─────────────────────────┐
              │   Payment Gateway       │
              ├─────────────────────────┤
              │ - Alipay Integration    │
              │ - WeChat Pay Integration│
              │ - Order Management      │
              └─────────────────────────┘
                            │
                            ▼
              ┌─────────────────────────┐
              │   Sales Website         │
              ├─────────────────────────┤
              │ - Product Pages         │
              │ - Pricing               │
              │ - User Center           │
              │ - Documentation         │
              └─────────────────────────┘
```

### Version Distribution Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Version Distribution                      │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  Open Source (MIT)          Personal (¥699)    Enterprise    │
│  ┌──────────────┐          ┌──────────────┐   (¥2999)       │
│  │ Full Source  │          │ Build Files  │   ┌───────────┐ │
│  │ - Frontend   │          │ - Compiled   │   │Full Source│ │
│  │ - Backend    │          │   Frontend   │   │+ License  │ │
│  │ - Admin      │          │ - Backend    │   │Agreement  │ │
│  │ - Database   │          │   (config    │   │           │ │
│  │              │          │   only)      │   │Priority   │ │
│  │ GitHub/Gitee │          │ - Admin      │   │Support    │ │
│  └──────────────┘          │              │   └───────────┘ │
│                            │ License Key  │                  │
│                            │ Required     │                  │
│                            └──────────────┘                  │
└─────────────────────────────────────────────────────────────┘
```

## Components and Interfaces

### 1. License Verification Module

**Location**: `backend/src/middleware/licenseMiddleware.js`

**Purpose**: Validates license keys and controls access to Pro features

**Interface**:
```javascript
/**
 * License verification middleware
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
async function verifyLicense(req, res, next)

/**
 * Check if a specific feature is enabled
 * @param {string} featureName - Name of the feature to check
 * @returns {boolean} - True if feature is enabled
 */
function isFeatureEnabled(featureName)

/**
 * Get license information
 * @returns {Object} - License details including type, expiration, features
 */
function getLicenseInfo()

/**
 * Refresh license from server
 * @returns {Promise<Object>} - Updated license information
 */
async function refreshLicense()
```

**License Key Format**:
```
UIED-{VERSION}-{TYPE}-{RANDOM}-{CHECKSUM}
Example: UIED-V1-PERSONAL-A7B9C2D4-E8F1
```

**License Storage**:
- File: `backend/config/license.json`
- Cache: In-memory with 24-hour TTL
- Fallback: 7-day grace period if server unreachable

### 2. License Server API

**Location**: Separate service (can be hosted on same infrastructure)

**Endpoints**:

```javascript
// Validate license key
POST /api/v1/license/validate
Request: {
  licenseKey: string,
  machineId: string,  // Optional: for device binding
  version: string
}
Response: {
  valid: boolean,
  type: 'personal' | 'enterprise',
  features: string[],
  expiresAt: string | null,  // null for permanent licenses
  message: string
}

// Activate license
POST /api/v1/license/activate
Request: {
  licenseKey: string,
  email: string,
  machineId: string
}
Response: {
  success: boolean,
  activatedAt: string,
  message: string
}

// Deactivate license (for device transfer)
POST /api/v1/license/deactivate
Request: {
  licenseKey: string,
  machineId: string
}
Response: {
  success: boolean,
  message: string
}
```

### 3. Installation Wizard

**Location**: `backend/src/routes/installRoutes.js` + `frontend/src/pages/Install/`

**Flow**:
```
Step 1: Welcome & Requirements Check
  ↓
Step 2: Database Configuration
  ↓
Step 3: Admin Account Creation
  ↓
Step 4: Site Configuration
  ↓
Step 5: License Activation (Optional)
  ↓
Step 6: Complete & Redirect
```

**Interface**:
```javascript
// Check if installation is needed
GET /api/install/status
Response: {
  installed: boolean,
  version: string
}

// Validate database connection
POST /api/install/validate-db
Request: {
  type: 'sqlite' | 'mysql' | 'postgresql',
  host: string,
  port: number,
  database: string,
  username: string,
  password: string
}
Response: {
  valid: boolean,
  message: string
}

// Create admin account
POST /api/install/create-admin
Request: {
  username: string,
  email: string,
  password: string
}
Response: {
  success: boolean,
  userId: number
}

// Complete installation
POST /api/install/complete
Request: {
  siteName: string,
  siteUrl: string,
  timezone: string,
  language: string,
  licenseKey: string | null
}
Response: {
  success: boolean,
  redirectUrl: string
}
```

### 4. Auto Update System

**Location**: `backend/src/services/updateService.js`

**Interface**:
```javascript
/**
 * Check for available updates
 * @returns {Promise<Object>} - Update information
 */
async function checkForUpdates()

/**
 * Download and apply update
 * @param {string} version - Version to update to
 * @returns {Promise<Object>} - Update result
 */
async function applyUpdate(version)

/**
 * Rollback to previous version
 * @returns {Promise<Object>} - Rollback result
 */
async function rollback()

/**
 * Create backup before update
 * @returns {Promise<string>} - Backup file path
 */
async function createBackup()
```

**Update Manifest Format**:
```json
{
  "version": "1.1.0",
  "releaseDate": "2026-02-01",
  "type": "minor",
  "changelog": [
    "Added cloud sync feature",
    "Fixed search performance issue"
  ],
  "files": [
    {
      "path": "backend/src/services/syncService.js",
      "checksum": "sha256:abc123...",
      "size": 15420
    }
  ],
  "migrations": [
    "20260201_add_sync_tables.sql"
  ],
  "minVersion": "1.0.0",
  "requiresLicense": ["personal", "enterprise"]
}
```

### 5. Pro Features Framework

**Location**: `backend/src/features/` (one directory per feature)

**Feature Registration**:
```javascript
// backend/src/features/index.js
const features = {
  cloudSync: {
    name: 'Cloud Sync',
    requiredLicense: ['personal', 'enterprise'],
    enabled: false,
    routes: require('./cloudSync/routes'),
    services: require('./cloudSync/services')
  },
  advancedSearch: {
    name: 'Advanced Search',
    requiredLicense: ['personal', 'enterprise'],
    enabled: false,
    routes: require('./advancedSearch/routes'),
    services: require('./advancedSearch/services')
  },
  statistics: {
    name: 'Data Statistics',
    requiredLicense: ['enterprise'],
    enabled: false,
    routes: require('./statistics/routes'),
    services: require('./statistics/services')
  },
  monitoring: {
    name: 'Website Monitoring',
    requiredLicense: ['enterprise'],
    enabled: false,
    routes: require('./monitoring/routes'),
    services: require('./monitoring/services')
  },
  noAds: {
    name: 'Ad Removal',
    requiredLicense: ['personal', 'enterprise'],
    enabled: false,
    frontendFlag: true
  }
};
```

### 6. Payment Integration

**Location**: `backend/src/services/paymentService.js`

**Supported Gateways**:
- Alipay (using `alipay-sdk` npm package)
- WeChat Pay (using `wechatpay-node-v3` npm package)

**Interface**:
```javascript
/**
 * Create payment order
 * @param {Object} orderData - Order information
 * @returns {Promise<Object>} - Payment URL or QR code
 */
async function createPayment(orderData)

/**
 * Verify payment callback
 * @param {Object} callbackData - Payment gateway callback
 * @returns {Promise<Object>} - Verification result
 */
async function verifyPayment(callbackData)

/**
 * Generate license key after successful payment
 * @param {number} orderId - Order ID
 * @returns {Promise<string>} - Generated license key
 */
async function generateLicenseKey(orderId)

/**
 * Send license key via email
 * @param {string} email - Customer email
 * @param {string} licenseKey - Generated license key
 * @returns {Promise<boolean>} - Send result
 */
async function sendLicenseEmail(email, licenseKey)
```

### 7. Sales Website

**Location**: New React application in `sales/` directory

**Pages**:
- `/` - Homepage with product overview
- `/features` - Detailed feature comparison
- `/pricing` - Pricing table with purchase buttons
- `/docs` - Documentation center
- `/user` - User center (login required)
- `/purchase` - Purchase flow
- `/download` - Download page for licensed users

**User Center Features**:
- View active licenses
- Download software (version-specific)
- Access invoices
- Manage account settings
- View order history

## Data Models

### License Table

```prisma
model License {
  id            Int       @id @default(autoincrement())
  licenseKey    String    @unique
  type          String    // 'personal' | 'enterprise'
  email         String
  orderId       Int?      @unique
  order         Order?    @relation(fields: [orderId], references: [id])
  activatedAt   DateTime?
  expiresAt     DateTime? // null for permanent
  machineId     String?   // for device binding
  features      String    // JSON array of enabled features
  status        String    @default("active") // 'active' | 'expired' | 'revoked'
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  
  @@index([licenseKey])
  @@index([email])
}
```

### Order Table

```prisma
model Order {
  id              Int       @id @default(autoincrement())
  orderNumber     String    @unique
  email           String
  productType     String    // 'personal' | 'enterprise'
  amount          Decimal   @db.Decimal(10, 2)
  currency        String    @default("CNY")
  paymentMethod   String    // 'alipay' | 'wechat'
  paymentStatus   String    @default("pending") // 'pending' | 'paid' | 'failed' | 'refunded'
  transactionId   String?   // Payment gateway transaction ID
  paidAt          DateTime?
  refundedAt      DateTime?
  license         License?
  metadata        String?   // JSON for additional data
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
  
  @@index([orderNumber])
  @@index([email])
  @@index([paymentStatus])
}
```

### Installation Config Table

```prisma
model InstallConfig {
  id            Int       @id @default(autoincrement())
  installed     Boolean   @default(false)
  version       String
  siteName      String?
  siteUrl       String?
  timezone      String?
  language      String?
  licenseKey    String?
  installedAt   DateTime?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}
```

### Update History Table

```prisma
model UpdateHistory {
  id              Int       @id @default(autoincrement())
  fromVersion     String
  toVersion       String
  status          String    // 'success' | 'failed' | 'rolled_back'
  backupPath      String?
  errorMessage    String?
  startedAt       DateTime  @default(now())
  completedAt     DateTime?
  
  @@index([toVersion])
}
```

### Sync Data Table (Pro Feature)

```prisma
model SyncData {
  id            Int       @id @default(autoincrement())
  userId        Int
  user          User      @relation(fields: [userId], references: [id])
  dataType      String    // 'bookmark' | 'setting' | 'preference'
  data          String    // JSON data
  deviceId      String
  syncedAt      DateTime  @default(now())
  version       Int       @default(1)
  
  @@index([userId, dataType])
  @@index([syncedAt])
}
```

### Statistics Table (Pro Feature)

```prisma
model Statistics {
  id            Int       @id @default(autoincrement())
  date          DateTime  @db.Date
  pageViews     Int       @default(0)
  uniqueVisitors Int      @default(0)
  popularPages  String    // JSON array
  searchQueries String    // JSON array
  metadata      String?   // JSON for additional metrics
  createdAt     DateTime  @default(now())
  
  @@unique([date])
  @@index([date])
}
```

### Monitor Alert Table (Pro Feature)

```prisma
model MonitorAlert {
  id            Int       @id @default(autoincrement())
  websiteId     Int
  website       Website   @relation(fields: [websiteId], references: [id])
  alertType     String    // 'down' | 'slow' | 'error'
  message       String
  responseTime  Int?      // milliseconds
  statusCode    Int?
  resolved      Boolean   @default(false)
  resolvedAt    DateTime?
  createdAt     DateTime  @default(now())
  
  @@index([websiteId, resolved])
  @@index([createdAt])
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*


### Property Reflection

After analyzing all testable acceptance criteria, I've identified the following properties and consolidated redundant ones:

**Consolidated Properties:**
- Properties 2.3 and 7.1 both test feature access control based on license - can be combined into one comprehensive property
- Properties 3.3 and 3.4 both deal with sync data integrity - conflict resolution is part of merge without data loss
- Properties 4.1 and 4.2 both test search filtering - boolean operators and filters can be tested together
- Properties 11.1 and 11.2 both test discount application - can be combined into one property that validates discount calculation and display

**Unique Properties Retained:**
- License validation (2.1) - core security property
- License caching and offline resilience (2.2, 2.5) - separate concerns
- Graceful degradation (2.4, 7.4) - important for user experience
- Cloud sync queue and timing (3.2, 3.5) - different aspects of sync
- Search features (4.3, 4.4) - highlighting and history are distinct
- Statistics and monitoring (5.1, 5.2, 5.3, 5.5, 6.3, 6.4) - each tests different calculations
- Payment and order management (8.3, 8.4) - critical for commerce
- Update system (13.4) - important for reliability
- Promotional system (11.3, 11.4, 11.5) - different aspects of promotions

### Correctness Properties

**Property 1: License Key Validation**

*For any* license key submitted for validation, the system should correctly determine its authenticity by verifying the checksum, checking expiration status against current date, and returning the exact set of features that the license type entitles.

**Validates: Requirements 2.1**

**Property 2: License-Based Feature Access Control**

*For any* Pro feature request and any license status, access should be granted if and only if the license is valid, not expired, and includes that specific feature in its entitlements, otherwise the request should be denied with appropriate error messaging.

**Validates: Requirements 2.3, 7.1**

**Property 3: License Cache Initialization**

*For any* backend startup sequence, the license status should be fetched from the license server (or file if offline), cached in memory, and remain available for subsequent feature checks without additional network calls until cache expiration.

**Validates: Requirements 2.2**

**Property 4: Graceful License Degradation**

*For any* invalid or expired license state, the system should continue operating with all open-source features fully functional, hide Pro feature UI elements, and display clear messaging about license status without throwing errors or breaking functionality.

**Validates: Requirements 2.4, 7.4**

**Property 5: Offline License Resilience**

*For any* license verification attempt when the license server is unreachable, the system should use cached license data if it exists and is less than 7 days old, otherwise treat the license as expired and degrade to open-source features.

**Validates: Requirements 2.5**

**Property 6: Cloud Sync Data Integrity**

*For any* set of local and cloud data changes, merging should preserve all data from both sources using last-write-wins for conflicts, log all conflicts for audit purposes, and ensure no data is lost during the merge process.

**Validates: Requirements 3.3, 3.4**

**Property 7: Cloud Sync Upload Timing**

*For any* local data modification, the change should be queued for upload and transmitted to the cloud service within 30 seconds if online, or queued persistently if offline for transmission when connection is restored.

**Validates: Requirements 3.2, 3.5**

**Property 8: Advanced Search Query Processing**

*For any* search query containing boolean operators (AND, OR, NOT) and field-specific filters (category, tags, date range, metadata), the system should parse the query correctly and return only results that satisfy all specified conditions.

**Validates: Requirements 4.1, 4.2**

**Property 9: Search Result Highlighting**

*For any* search query and matching results, the system should highlight all matching terms in the result snippets and calculate relevance scores based on term frequency and field weights.

**Validates: Requirements 4.3**

**Property 10: Search History Management**

*For any* sequence of search queries, the system should store the most recent 50 searches in chronological order, automatically removing the oldest when the 51st search is performed.

**Validates: Requirements 4.4**

**Property 11: Statistics Data Collection**

*For any* user interaction (page view, search, resource click), the system should record the event with timestamp, anonymized user identifier, and relevant metadata for later aggregation.

**Validates: Requirements 5.1**

**Property 12: Statistics Aggregation Accuracy**

*For any* set of raw statistics events, daily, weekly, and monthly aggregations should produce mathematically correct sums, averages, and counts, with trend calculations showing accurate percentage changes between periods.

**Validates: Requirements 5.2**

**Property 13: Statistics Export Format**

*For any* statistics export request with date range, the system should generate files in the requested format (CSV or JSON) containing all data points within the range with proper field names and data types.

**Validates: Requirements 5.3**

**Property 14: Privacy-Compliant Data Collection**

*For any* IP address collected in statistics, the system should anonymize it by removing the last octet (IPv4) or last 80 bits (IPv6), and should not collect any data when Do Not Track header is present.

**Validates: Requirements 5.5**

**Property 15: Monitoring Metrics Calculation**

*For any* set of website check results, the system should correctly calculate response time averages, uptime percentage (successful checks / total checks), and error rates for the specified time period.

**Validates: Requirements 6.3**

**Property 16: Monitoring Data Retention**

*For any* monitoring alert or check result older than 90 days, the system should automatically remove it from the database during the daily cleanup job while preserving all data within the 90-day window.

**Validates: Requirements 6.4**

**Property 17: Ad Removal for Pro Users**

*For any* page render with an active Pro license, the system should exclude all advertisement components from the DOM, not load ad-related scripts, and apply ad-free CSS classes, with ad state persisting across sessions.

**Validates: Requirements 7.2, 7.5**

**Property 18: Order Data Persistence**

*For any* order creation, the system should store all required fields (order number, email, product type, amount, currency, payment method, payment status) in the database and return the complete order object with generated ID.

**Validates: Requirements 8.3**

**Property 19: Payment Idempotency**

*For any* payment failure, the system should log the error with transaction details, allow the user to retry the payment, and ensure that retries reference the same order ID without creating duplicate orders.

**Validates: Requirements 8.4**

**Property 20: User License Display**

*For any* authenticated user accessing their user center, the system should retrieve and display all licenses associated with their email, including license keys, product types, activation dates, and expiration dates.

**Validates: Requirements 9.3**

**Property 21: Update Visibility Control**

*For any* software update release, open-source updates should be visible to all users via public channels, while Pro feature updates should only be visible to users with valid Personal or Enterprise licenses.

**Validates: Requirements 10.4**

**Property 22: Promotional Discount Calculation**

*For any* purchase made during an active promotion period, the system should automatically calculate the discount amount (20% of base price), subtract it from the total, display both original and discounted prices, and store the discount details in the order record.

**Validates: Requirements 11.1, 11.2**

**Property 23: Promotion Period Pricing**

*For any* purchase made after a promotion ends, the system should use standard pricing without any discount, while all licenses issued during the promotion remain valid with their original terms.

**Validates: Requirements 11.3**

**Property 24: Promotional Code Validation**

*For any* promotional code submitted, the system should verify the code exists, is not expired, has not exceeded usage limits, and apply the associated discount percentage or fixed amount to the order total.

**Validates: Requirements 11.4**

**Property 25: Promotional Analytics Calculation**

*For any* set of promotional orders, the system should calculate conversion rate (purchases / visitors), total revenue, average order value, and customer acquisition cost (marketing spend / customers) with correct mathematical formulas.

**Validates: Requirements 11.5**

**Property 26: Password Validation**

*For any* password submitted during admin account creation, the system should enforce minimum length (8 characters), require at least one uppercase letter, one lowercase letter, one number, and one special character, rejecting passwords that don't meet all criteria.

**Validates: Requirements 12.3**

**Property 27: Update Rollback Recovery**

*For any* update that fails during application (database migration error, file corruption, etc.), the system should automatically detect the failure, restore the database from the pre-update backup, revert file changes, and log the failure details for troubleshooting.

**Validates: Requirements 13.4**

**Property 28: Version Update Detection**

*For any* current version and available version comparison, the system should correctly determine if an update is available by parsing semantic versions (major.minor.patch) and comparing them numerically, considering major > minor > patch priority.

**Validates: Requirements 1.4**

## Error Handling

### License Verification Errors

**Network Failures:**
- Use cached license data if available and within 7-day grace period
- Log network errors for monitoring
- Display user-friendly message: "License verification temporarily unavailable, using cached status"

**Invalid License Keys:**
- Return clear error message indicating the specific validation failure (format, checksum, expiration)
- Degrade gracefully to open-source features
- Log invalid attempts for security monitoring

**License Server Errors:**
- Implement exponential backoff for retries (1s, 2s, 4s, 8s)
- Fall back to cached data after 3 failed attempts
- Alert administrators if server is down for > 1 hour

### Payment Processing Errors

**Payment Gateway Failures:**
- Log full error details including gateway response
- Display user-friendly error message
- Preserve order in "pending" state for retry
- Send notification to admin for manual review

**Duplicate Order Prevention:**
- Use unique order numbers with timestamp + random component
- Implement database unique constraints on order number
- Check for existing pending orders before creating new ones

**License Generation Failures:**
- Retry license generation up to 3 times with exponential backoff
- If all retries fail, mark order as "paid_pending_license"
- Queue for manual license generation and notification
- Send apology email to customer with expected resolution time

### Cloud Sync Errors

**Conflict Resolution:**
- Log all conflicts with timestamps and data snapshots
- Apply last-write-wins automatically
- Provide conflict history in user dashboard for review
- Allow manual conflict resolution for critical data

**Data Corruption:**
- Validate data integrity before sync using checksums
- Reject corrupted data and log error
- Maintain local backup of last known good state
- Provide data recovery tools in admin panel

### Installation Wizard Errors

**Database Connection Failures:**
- Test connection before proceeding
- Display specific error (wrong credentials, server unreachable, etc.)
- Provide troubleshooting tips based on error type
- Allow retry without losing entered configuration

**Migration Failures:**
- Wrap all migrations in transactions
- Rollback on any error
- Log detailed error with SQL statement
- Provide manual migration option with SQL scripts

### Update System Errors

**Download Failures:**
- Verify checksums before applying updates
- Retry downloads up to 3 times
- Fall back to manual update instructions
- Preserve current version if download fails

**Backup Failures:**
- Refuse to proceed with update if backup fails
- Alert administrator immediately
- Provide manual backup instructions
- Log backup failure details

## Testing Strategy

### Dual Testing Approach

This project requires both **unit tests** and **property-based tests** for comprehensive coverage:

**Unit Tests** focus on:
- Specific examples and edge cases (empty inputs, boundary values)
- Integration points between components (API contracts, database queries)
- Error conditions and exception handling
- Installation wizard flows and payment workflows

**Property-Based Tests** focus on:
- Universal properties that hold for all inputs (license validation, search queries)
- Data integrity properties (sync merging, statistics aggregation)
- Mathematical correctness (discount calculations, metrics)
- Security properties (access control, data anonymization)

Together, unit tests catch concrete bugs while property tests verify general correctness across the input space.

### Property-Based Testing Configuration

**Library Selection:**
- Backend: `fast-check` (already in use, excellent for Node.js)
- Frontend: `fast-check` for business logic, React Testing Library for UI

**Test Configuration:**
- Minimum 100 iterations per property test (due to randomization)
- Seed-based reproducibility for failed tests
- Shrinking enabled to find minimal failing examples

**Test Tagging:**
Each property test must include a comment referencing the design property:

```javascript
/**
 * Feature: open-source-commercialization, Property 1: License Key Validation
 * For any license key submitted for validation, the system should correctly
 * determine its authenticity by verifying the checksum, checking expiration
 * status against current date, and returning the exact set of features that
 * the license type entitles.
 */
test('license key validation property', () => {
  fc.assert(
    fc.property(
      fc.record({
        key: licenseKeyArbitrary(),
        currentDate: fc.date()
      }),
      ({ key, currentDate }) => {
        const result = validateLicense(key, currentDate);
        // Property assertions here
      }
    ),
    { numRuns: 100 }
  );
});
```

### Test Organization

```
backend/src/__tests__/
  /unit/
    /license/
      - licenseValidation.test.js
      - licenseCache.test.js
    /payment/
      - orderCreation.test.js
      - paymentProcessing.test.js
    /features/
      - cloudSync.test.js
      - advancedSearch.test.js
      - statistics.test.js
      - monitoring.test.js
  /properties/
    - license.property.test.js
    - payment.property.test.js
    - sync.property.test.js
    - search.property.test.js
    - statistics.property.test.js
  /integration/
    - installWizard.integration.test.js
    - purchaseFlow.integration.test.js
    - updateSystem.integration.test.js
```

### Key Test Scenarios

**Installation Wizard:**
- Test successful installation flow
- Test database connection failures
- Test invalid admin credentials
- Test license activation during install
- Test lock file creation and prevention of re-install

**License System:**
- Property: License validation for all key formats
- Property: Feature access control for all license types
- Unit: Specific invalid key formats
- Unit: Expired license handling
- Unit: Offline grace period edge cases

**Payment Integration:**
- Property: Order idempotency for all payment failures
- Property: Discount calculation for all promotion types
- Unit: Alipay callback verification
- Unit: WeChat Pay callback verification
- Integration: End-to-end purchase flow

**Cloud Sync:**
- Property: Data integrity for all merge scenarios
- Property: Conflict resolution for all conflict types
- Unit: Offline queue persistence
- Unit: Sync timing edge cases

**Pro Features:**
- Property: Search query parsing for all operator combinations
- Property: Statistics aggregation for all time periods
- Unit: Monitoring alert thresholds
- Unit: Ad removal UI changes

### Performance Testing

While not part of unit/property tests, these performance requirements should be validated:
- Search response time < 200ms for 10,000 items
- License verification < 100ms (cached)
- Cloud sync upload < 30 seconds
- Statistics dashboard update < 60 seconds
- Update download progress reporting

### Security Testing

- SQL injection prevention in all database queries
- XSS prevention in all user-generated content
- CSRF protection on all state-changing endpoints
- License key brute-force protection (rate limiting)
- Payment callback signature verification
- Admin authentication on all protected routes

## Implementation Notes

### Phase 1: Codebase Preparation (Week 1-2)

**Sensitive Data Audit:**
- Search codebase for hardcoded credentials, API keys, internal URLs
- Move all secrets to environment variables
- Create comprehensive .env.example files
- Document all required environment variables

**Installation Wizard:**
- Create new `/install` route that checks for lock file
- Build multi-step wizard UI (React components)
- Implement database connection testing
- Add Prisma migration runner
- Create installation lock mechanism

**Auto Update System:**
- Design update manifest format
- Build update checker service (daily cron job)
- Implement backup creation before updates
- Add rollback mechanism
- Create update notification UI in admin

**Documentation:**
- Write installation guide (Linux, Windows, Docker)
- Create API documentation with examples
- Document environment variables
- Write contribution guidelines
- Create troubleshooting guide

### Phase 2: License System (Week 3)

**License Server:**
- Set up separate Express service for license validation
- Implement license key generation algorithm
- Create validation endpoints
- Add database for license storage
- Implement rate limiting for security

**Backend Integration:**
- Create license middleware
- Implement license caching
- Add feature flag system
- Build offline grace period logic
- Add license refresh mechanism

**Frontend Integration:**
- Add license status display in admin
- Create license activation UI
- Implement feature gating in UI
- Add license expiration warnings

### Phase 3: Pro Features (Week 4-6)

**Cloud Sync (Week 4):**
- Design sync data schema
- Implement sync API endpoints
- Build conflict resolution logic
- Add offline queue
- Create sync status UI

**Advanced Search (Week 4):**
- Implement query parser for boolean operators
- Add field-specific search
- Build result highlighting
- Implement search history
- Add relevance scoring

**Statistics (Week 5):**
- Create statistics collection middleware
- Implement aggregation queries
- Build dashboard UI
- Add export functionality
- Implement IP anonymization

**Monitoring (Week 5):**
- Create website checker service
- Implement alert system
- Build monitoring dashboard
- Add notification channels
- Create uptime reports

**Ad Removal (Week 6):**
- Identify all ad components
- Implement license-based rendering
- Add ad-free CSS
- Test graceful degradation

### Phase 4: Payment Integration (Week 7)

**Alipay Integration:**
- Register merchant account
- Install alipay-sdk package
- Implement payment creation
- Add callback verification
- Test sandbox environment

**WeChat Pay Integration:**
- Register merchant account
- Install wechatpay-node-v3 package
- Implement payment creation
- Add callback verification
- Test sandbox environment

**Order Management:**
- Create order schema and API
- Implement order status tracking
- Build admin order management UI
- Add refund processing
- Create invoice generation

**License Delivery:**
- Implement automatic license generation
- Set up email service (nodemailer)
- Create license email template
- Add delivery confirmation
- Implement retry logic for failures

### Phase 5: Sales Website (Week 8-9)

**Website Structure:**
- Set up new React project in `/sales`
- Create responsive layout
- Implement routing
- Add authentication
- Build user center

**Content Pages:**
- Homepage with product overview
- Features comparison page
- Pricing page with purchase buttons
- Documentation center
- Download page

**Purchase Flow:**
- Product selection UI
- Payment method selection
- Order confirmation
- Payment processing
- License delivery confirmation

**User Center:**
- License management
- Download links
- Order history
- Invoice access
- Account settings

### Phase 6: Launch (Week 10-12)

**Open Source Release:**
- Clean final codebase audit
- Create comprehensive README
- Add LICENSE file (MIT)
- Publish to GitHub and Gitee
- Create release tags

**Pro Version Release:**
- Build production artifacts
- Test license system thoroughly
- Set up payment accounts
- Configure email delivery
- Deploy sales website

**Marketing:**
- Write launch blog post
- Create demo video
- Post on tech communities
- Offer early bird discount (20%)
- Collect user feedback

**Monitoring:**
- Set up error tracking (Sentry)
- Monitor payment success rates
- Track license activations
- Monitor server performance
- Collect user feedback

## Success Metrics

**Year 1 Goals:**
- Open source installs: 500+
- GitHub stars: 200+
- Pro version sales: 50 copies (¥34,950 revenue)
- Enterprise sales: 5 copies (¥14,995 revenue)
- Total revenue: ¥49,945
- Active community contributors: 10+
- Documentation page views: 5,000+
- Support ticket resolution time: < 24 hours

**Key Performance Indicators:**
- Conversion rate (visitors to purchasers): 2-5%
- License activation rate: > 90%
- Payment success rate: > 95%
- Customer satisfaction: > 4.5/5
- Update adoption rate: > 80% within 30 days
- Support ticket volume: < 10 per week
