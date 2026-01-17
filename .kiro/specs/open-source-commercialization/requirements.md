# Requirements Document: Open Source Commercialization

## Introduction

This specification defines the requirements for transforming the UIED navigation system into a dual-track open-source and commercial product with **AI as the core differentiator**. The system will provide a free open-source version with core features, while offering Personal (¥699) and Enterprise (¥2999) versions with AI-powered capabilities that significantly enhance user experience and administrative efficiency.

**Key AI Features:**
- **Personal Version**: AI Smart Recommendations, AI Search Assistant, AI Content Generation
- **Enterprise Version**: AI Data Analytics, AI Content Moderation (plus all Personal features)

The implementation follows a phased approach: codebase preparation, license verification, AI features development, payment integration, and sales website.

## Glossary

- **Open_Source_Version**: Free version with core features, MIT license, distributed via GitHub/Gitee
- **Personal_Version**: Paid version (¥699) with AI Smart Recommendations, AI Search Assistant, AI Content Generation, cloud sync, and no ads
- **Enterprise_Version**: Premium version (¥2999) with AI Data Analytics, AI Content Moderation, statistics, monitoring, and full source code
- **AI_Smart_Recommendations**: AI-powered personalized website recommendations based on user browsing history and interests
- **AI_Search_Assistant**: Natural language search powered by AI that understands user intent and provides intelligent results
- **AI_Content_Generation**: Automated generation of website descriptions, keywords, and tags using AI analysis
- **AI_Data_Analytics**: Enterprise-grade AI analysis of user behavior, trends, and business insights
- **AI_Content_Moderation**: Automated content review using AI to detect spam, quality issues, and inappropriate content
- **License_Server**: Backend service that validates license keys and manages subscriptions
- **License_Key**: Unique identifier that unlocks Pro features for a specific installation
- **Installation_Wizard**: Setup interface similar to WordPress for initial configuration
- **Auto_Update_System**: Mechanism for checking and applying software updates
- **Pro_Feature**: Functionality available only in paid versions
- **Build_Files**: Compiled frontend and configured backend without full source code
- **Payment_Gateway**: Integration with Alipay and WeChat Pay for processing payments
- **Sales_Website**: Public-facing site for product information, pricing, and purchases
- **User_Center**: Dashboard for managing licenses, downloads, and account information

## Requirements

### Requirement 1: Codebase Preparation for Open Source

**User Story:** As a developer preparing for open-source release, I want to clean and document the codebase, so that external users can easily install and use the system.

#### Acceptance Criteria

1. WHEN the codebase is audited, THE System SHALL remove all sensitive information including API keys, passwords, and internal URLs
2. WHEN environment configuration is needed, THE System SHALL provide example files (.env.example) with clear documentation
3. WHEN a user installs the system, THE Installation_Wizard SHALL guide them through database setup, admin account creation, and basic configuration
4. WHEN the system checks for updates, THE Auto_Update_System SHALL compare current version with latest release and offer upgrade options
5. WHEN documentation is accessed, THE System SHALL provide comprehensive guides for installation, usage, API reference, and contribution guidelines

### Requirement 2: License Verification System

**User Story:** As a product owner, I want a simple license verification system, so that I can control access to Pro features without complex DRM.

#### Acceptance Criteria

1. WHEN a License_Key is validated, THE License_Server SHALL verify its authenticity, expiration status, and feature entitlements
2. WHEN the backend starts, THE System SHALL check the license status and cache the result for performance
3. WHEN a Pro feature is accessed, THE System SHALL verify the license allows that feature before executing
4. WHEN a license is invalid or expired, THE System SHALL gracefully degrade to open-source features and display appropriate messaging
5. WHEN license verification fails due to network issues, THE System SHALL use cached license data for up to 7 days

### Requirement 3: AI Smart Recommendations (Pro) ⭐ CORE FEATURE

**User Story:** As a Personal_Version user, I want AI to recommend websites based on my browsing history, so that I can discover relevant content without searching.

#### Acceptance Criteria

1. WHEN a user visits websites, THE System SHALL track browsing history and analyze user interests using AI
2. WHEN AI analyzes user behavior, THE System SHALL identify interest categories, tags, and patterns
3. WHEN recommendations are generated, THE System SHALL provide 10 personalized website suggestions daily
4. WHEN displaying recommendations, THE System SHALL include AI-generated reasons explaining why each website is recommended
5. WHEN user preferences change, THE System SHALL update recommendations within 24 hours to reflect new interests

### Requirement 3A: Cloud Sync Feature (Pro)

**User Story:** As a Personal_Version user, I want to sync my bookmarks and settings across devices, so that I can access my data anywhere.

#### Acceptance Criteria

1. WHEN a user enables cloud sync, THE System SHALL authenticate with the cloud service and establish a sync connection
2. WHEN local data changes, THE System SHALL upload changes to the cloud within 30 seconds
3. WHEN cloud data changes, THE System SHALL download and merge changes without data loss
4. WHEN sync conflicts occur, THE System SHALL use last-write-wins strategy with conflict logging
5. WHEN the user is offline, THE System SHALL queue changes and sync when connection is restored

### Requirement 4: AI Search Assistant (Pro) ⭐ CORE FEATURE

**User Story:** As a Personal_Version user, I want to search using natural language, so that I can find websites without knowing exact keywords.

#### Acceptance Criteria

1. WHEN a user enters a natural language query, THE System SHALL use AI to understand search intent and extract key concepts
2. WHEN AI processes the query, THE System SHALL identify search type (learning, tools, inspiration), topic, and relevant filters
3. WHEN search results are returned, THE System SHALL rank them by AI-calculated relevance scores
4. WHEN displaying results, THE System SHALL provide AI-generated summaries highlighting why each result matches the query
5. WHEN search completes, THE System SHALL suggest related searches based on AI understanding of user intent

### Requirement 4A: Advanced Search Feature (Pro)

**User Story:** As a Personal_Version user, I want advanced search capabilities, so that I can quickly find specific resources using filters and operators.

#### Acceptance Criteria

1. WHEN a user performs advanced search, THE System SHALL support boolean operators (AND, OR, NOT) and field-specific queries
2. WHEN search filters are applied, THE System SHALL filter by category, tags, date range, and custom metadata
3. WHEN search results are displayed, THE System SHALL highlight matching terms and show relevance scores
4. WHEN search history is accessed, THE System SHALL store the last 50 searches for quick re-execution
5. WHEN search is performed, THE System SHALL return results within 200ms for datasets up to 10,000 items

### Requirement 5: AI Content Generation (Pro) ⭐ CORE FEATURE

**User Story:** As a Personal_Version administrator, I want AI to automatically generate website descriptions and metadata, so that I can save time and improve content quality.

#### Acceptance Criteria

1. WHEN a website URL is submitted, THE System SHALL use AI to scrape and analyze the website content
2. WHEN AI analyzes content, THE System SHALL generate optimized title, description, keywords, and tags
3. WHEN generating content, THE System SHALL assign an AI quality score (0-1) indicating content confidence
4. WHEN batch processing is requested, THE System SHALL process multiple websites concurrently with progress tracking
5. WHEN content is generated, THE System SHALL allow administrators to review, edit, or regenerate before saving

### Requirement 5A: Data Statistics Feature (Pro)

**User Story:** As an Enterprise_Version user, I want detailed usage statistics, so that I can understand user behavior and optimize content.

#### Acceptance Criteria

1. WHEN statistics are collected, THE System SHALL track page views, unique visitors, popular resources, and search queries
2. WHEN statistics are displayed, THE System SHALL provide daily, weekly, and monthly aggregations with trend analysis
3. WHEN export is requested, THE System SHALL generate CSV and JSON reports with customizable date ranges
4. WHEN real-time data is needed, THE System SHALL update dashboard metrics every 60 seconds
5. WHEN privacy is configured, THE System SHALL anonymize IP addresses and respect Do Not Track headers

### Requirement 6: AI Data Analytics (Enterprise) ⭐ CORE FEATURE

**User Story:** As an Enterprise_Version user, I want AI to analyze usage data and provide business insights, so that I can make data-driven decisions.

#### Acceptance Criteria

1. WHEN analytics data is collected, THE System SHALL use AI to identify trends, anomalies, and patterns in user behavior
2. WHEN AI analyzes trends, THE System SHALL detect rising/falling categories with growth percentages and explanations
3. WHEN anomalies are detected, THE System SHALL identify unusual changes in traffic or behavior with potential causes
4. WHEN generating insights, THE System SHALL provide actionable business recommendations with priority levels and expected impact
5. WHEN reports are requested, THE System SHALL generate AI-written reports summarizing key findings and suggestions

### Requirement 6A: AI Content Moderation (Enterprise) ⭐ CORE FEATURE

**User Story:** As an Enterprise_Version administrator, I want AI to automatically review user submissions, so that I can reduce manual moderation workload.

#### Acceptance Criteria

1. WHEN a website is submitted, THE System SHALL use AI to detect spam, inappropriate content, and quality issues
2. WHEN AI analyzes submissions, THE System SHALL calculate spam score (0-1) and quality score (0-1)
3. WHEN AI completes analysis, THE System SHALL recommend approval/rejection with confidence level and reasoning
4. WHEN confidence is high (>0.9), THE System SHALL automatically process submissions without manual review
5. WHEN confidence is low, THE System SHALL flag for manual review with AI-provided context and suggestions

### Requirement 6B: Website Monitoring Feature (Pro)

**User Story:** As an Enterprise_Version user, I want to monitor website health and performance, so that I can proactively address issues.

#### Acceptance Criteria

1. WHEN monitoring is enabled, THE System SHALL check website availability every 5 minutes
2. WHEN a website is down, THE System SHALL send notifications via email and webhook within 2 minutes
3. WHEN performance metrics are collected, THE System SHALL track response time, uptime percentage, and error rates
4. WHEN monitoring history is accessed, THE System SHALL retain 90 days of monitoring data
5. WHEN alerts are configured, THE System SHALL support custom thresholds and notification channels

### Requirement 7: Ad Removal Feature (Pro)

**User Story:** As a Personal_Version user, I want an ad-free experience, so that I can focus on content without distractions.

#### Acceptance Criteria

1. WHEN a Pro license is active, THE System SHALL hide all advertisement components from the UI
2. WHEN the frontend renders, THE System SHALL not load ad-related scripts or tracking pixels for Pro users
3. WHEN the license is verified, THE System SHALL apply ad-free styling within 100ms of page load
4. WHEN the license expires, THE System SHALL restore ads gracefully without breaking the UI
5. WHEN ad preferences are saved, THE System SHALL persist the ad-free state across sessions

### Requirement 8: Payment Integration

**User Story:** As a customer, I want to purchase licenses using Alipay or WeChat Pay, so that I can access Pro features immediately.

#### Acceptance Criteria

1. WHEN a payment is initiated, THE Payment_Gateway SHALL support both Alipay and WeChat Pay with QR code and redirect flows
2. WHEN payment is completed, THE System SHALL generate a License_Key and send it via email within 5 minutes
3. WHEN an order is created, THE System SHALL store order details including user info, product type, amount, and payment status
4. WHEN payment fails, THE System SHALL log the error and allow retry without creating duplicate orders
5. WHEN a refund is requested, THE System SHALL revoke the License_Key and process refund through the original payment method

### Requirement 9: Sales Website

**User Story:** As a potential customer, I want to learn about the product and purchase licenses, so that I can decide which version suits my needs.

#### Acceptance Criteria

1. WHEN the sales website is accessed, THE System SHALL display product features, pricing comparison, and customer testimonials
2. WHEN a purchase is initiated, THE System SHALL guide users through product selection, payment, and license delivery
3. WHEN a user logs into User_Center, THE System SHALL display their licenses, download links, and order history
4. WHEN documentation is needed, THE System SHALL provide searchable guides, API docs, and video tutorials
5. WHEN the pricing page is viewed, THE System SHALL clearly differentiate Open_Source_Version, Personal_Version, and Enterprise_Version features

### Requirement 10: Version Distribution

**User Story:** As a product owner, I want to distribute different versions appropriately, so that I protect commercial value while promoting open source.

#### Acceptance Criteria

1. WHEN Open_Source_Version is released, THE System SHALL publish full source code to GitHub and Gitee with MIT license
2. WHEN Personal_Version is delivered, THE System SHALL provide Build_Files with compiled frontend and configured backend
3. WHEN Enterprise_Version is delivered, THE System SHALL provide full source code with commercial license agreement
4. WHEN updates are released, THE System SHALL publish open-source updates publicly and Pro updates to licensed users only
5. WHEN source code is accessed, THE System SHALL ensure Enterprise customers receive priority support and update notifications

### Requirement 11: Early Bird Promotion

**User Story:** As a marketing manager, I want to offer launch discounts, so that I can attract early adopters and validate the business model.

#### Acceptance Criteria

1. WHEN the promotion period is active, THE System SHALL apply 20% discount to all purchases automatically
2. WHEN a promotional purchase is made, THE System SHALL clearly indicate the discount amount and savings
3. WHEN the promotion ends, THE System SHALL revert to standard pricing without affecting existing licenses
4. WHEN promotional codes are used, THE System SHALL validate code authenticity and apply appropriate discounts
5. WHEN promotional analytics are viewed, THE System SHALL track conversion rates, revenue, and customer acquisition costs

### Requirement 12: Installation Wizard

**User Story:** As a new user installing the open-source version, I want a guided setup process, so that I can configure the system without technical expertise.

#### Acceptance Criteria

1. WHEN the system is first accessed, THE Installation_Wizard SHALL detect unconfigured state and launch automatically
2. WHEN database setup is performed, THE Installation_Wizard SHALL test connection, create schema, and run migrations
3. WHEN admin account is created, THE Installation_Wizard SHALL enforce strong password requirements and validate email format
4. WHEN basic configuration is completed, THE Installation_Wizard SHALL set site name, URL, timezone, and language preferences
5. WHEN installation finishes, THE Installation_Wizard SHALL create a lock file to prevent re-running and redirect to admin dashboard

### Requirement 13: Auto Update System

**User Story:** As a system administrator, I want automatic update notifications, so that I can keep the system secure and up-to-date.

#### Acceptance Criteria

1. WHEN the system checks for updates, THE Auto_Update_System SHALL query the update server daily for new releases
2. WHEN an update is available, THE System SHALL display notification in admin dashboard with version notes and changelog
3. WHEN an update is applied, THE System SHALL backup database, download new files, and run migration scripts
4. WHEN an update fails, THE System SHALL rollback changes and restore from backup automatically
5. WHEN update preferences are configured, THE System SHALL support automatic, manual, or notification-only modes

### Requirement 14: Documentation System

**User Story:** As a developer or user, I want comprehensive documentation, so that I can understand how to install, use, and extend the system.

#### Acceptance Criteria

1. WHEN installation documentation is accessed, THE System SHALL provide step-by-step guides for different environments (Linux, Windows, Docker)
2. WHEN API documentation is accessed, THE System SHALL provide endpoint descriptions, request/response examples, and authentication details
3. WHEN usage guides are accessed, THE System SHALL provide tutorials for common tasks with screenshots and videos
4. WHEN contribution guidelines are accessed, THE System SHALL provide coding standards, PR process, and development setup instructions
5. WHEN documentation is searched, THE System SHALL return relevant results within 500ms with highlighted matches

### Requirement 15: Demo Site

**User Story:** As a potential user, I want to try the system before installing, so that I can evaluate if it meets my needs.

#### Acceptance Criteria

1. WHEN the demo site is accessed, THE System SHALL provide a fully functional instance with sample data
2. WHEN demo data is modified, THE System SHALL reset to original state every 24 hours
3. WHEN demo limitations are displayed, THE System SHALL clearly indicate this is a demo and link to installation instructions
4. WHEN demo performance is measured, THE System SHALL handle at least 100 concurrent users without degradation
5. WHEN demo features are showcased, THE System SHALL highlight both open-source and Pro features with appropriate labeling
