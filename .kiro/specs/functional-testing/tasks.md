# Implementation Plan: Functional Testing

## Overview

本任务列表定义了功能测试的实现步骤，包括测试工具设置、API 测试和属性测试的编写。

## Tasks

- [x] 1. Set up test utilities and generators
  - [x] 1.1 Create test data generators using fast-check
    - Create `backend/src/__tests__/utils/generators.js`
    - Implement `validWebsiteArb` generator for valid website data
    - Implement `validCategoryArb` generator for valid category data
    - Implement `invalidWebsiteArb` generator for invalid inputs
    - _Requirements: 1.1, 1.4, 2.2_

  - [x] 1.2 Create test database utilities
    - Create `backend/src/__tests__/utils/testDb.js`
    - Implement setup/teardown functions for test isolation
    - Implement seed function for test data
    - _Requirements: All_

- [x] 2. Implement Website API Tests
  - [x] 2.1 Create website API test file
    - Create `backend/src/__tests__/api/websites.test.js`
    - Test GET /api/websites returns website list
    - Test GET /api/websites/:id returns single website
    - Test POST /api/websites creates website
    - _Requirements: 1.1, 1.2, 6.1_

  - [x] 2.2 Write property test for website creation
    - **Property 1: Website Creation Returns Valid Data**
    - **Validates: Requirements 1.1, 1.5**

  - [x] 2.3 Write property test for required field validation
    - **Property 3: Required Field Validation**
    - **Validates: Requirements 1.4**

  - [x] 2.4 Write property test for pagination
    - **Property 7: Pagination Consistency**
    - **Validates: Requirements 6.1**

- [x] 3. Implement Category API Tests
  - [x] 3.1 Create category API test file
    - Create `backend/src/__tests__/api/categories.test.js`
    - Test GET /api/categories returns category tree
    - Test POST /api/categories creates category
    - Test PUT /api/categories/:id updates category
    - _Requirements: 2.1, 2.2, 2.5_

  - [x] 3.2 Write property test for category hierarchy
    - **Property 4: Category Hierarchy Preservation**
    - **Validates: Requirements 2.3**

  - [x] 3.3 Write property test for category update
    - **Property 5: Category Update Persistence**
    - **Validates: Requirements 2.5**

- [x] 4. Implement Website-Category Association Tests
  - [x] 4.1 Create association test file
    - Create `backend/src/__tests__/api/associations.test.js`
    - Test website creation with categoryId
    - Test filtering websites by category
    - _Requirements: 3.1, 3.2, 3.3_

  - [x] 4.2 Write property test for website-category association
    - **Property 2: Website-Category Association Integrity**
    - **Validates: Requirements 1.2, 3.1, 3.2**

  - [x] 4.3 Write property test for category filtering
    - **Property 6: Website Filtering by Category**
    - **Validates: Requirements 3.2, 3.3**

- [x] 5. Implement Error Handling Tests
  - [x] 5.1 Create error handling test file
    - Create `backend/src/__tests__/api/errors.test.js`
    - Test 404 for non-existent resources
    - Test 400 for invalid input
    - Test error response format
    - _Requirements: 6.4_

  - [x] 5.2 Write property test for error response format
    - **Property 9: API Error Response Format**
    - **Validates: Requirements 6.4**

- [x] 6. Checkpoint - Run all tests
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 7. Implement Authentication Tests
  - [ ] 7.1 Create authentication test file
    - Create `backend/src/__tests__/api/auth.test.js`
    - Test POST /api/auth/login with valid credentials
    - Test POST /api/auth/login with invalid credentials
    - Test GET /api/auth/verify with valid token
    - Test GET /api/auth/verify with invalid token
    - _Requirements: 7.1, 7.2, 7.3, 7.4_

  - [ ] 7.2 Write property test for token validity
    - **Property 10: Authentication Token Validity**
    - **Validates: Requirements 7.1, 7.3**

- [ ] 8. Implement Banner Tests
  - [ ] 8.1 Create banner test file
    - Create `backend/src/__tests__/api/banners.test.js`
    - Test GET /api/banners returns all banners
    - Test GET /api/banners/active returns only active banners
    - Test POST /api/banners creates banner
    - Test POST /api/banners/:id/click increments count
    - _Requirements: 8.1, 8.2, 8.3, 8.4_

  - [ ] 8.2 Write property test for active banner filtering
    - **Property 11: Banner Active Filtering**
    - **Validates: Requirements 8.2**

- [ ] 9. Implement Page Configuration Tests
  - [ ] 9.1 Create page test file
    - Create `backend/src/__tests__/api/pages.test.js`
    - Test GET /api/pages returns all pages
    - Test GET /api/pages/:slug/full returns complete page data
    - Test GET /api/pages/:slug/search returns search results
    - Test GET /api/pages/:slug/hot returns hot websites
    - _Requirements: 9.1, 9.2, 9.3_

  - [ ] 9.2 Write property test for page full data
    - **Property 12: Page Full Data Completeness**
    - **Validates: Requirements 9.1**

  - [ ] 9.3 Write property test for search relevance
    - **Property 13: Search Relevance Ordering**
    - **Validates: Requirements 9.2**

- [ ] 10. Implement Submission Tests
  - [ ] 10.1 Create submission test file
    - Create `backend/src/__tests__/api/submissions.test.js`
    - Test POST /api/submissions creates pending submission
    - Test GET /api/submissions/check-url detects duplicates
    - Test POST /api/submissions/:id/approve creates website
    - Test POST /api/submissions/:id/reject updates status
    - _Requirements: 10.1, 10.2, 10.3, 10.4_

  - [ ] 10.2 Write property test for URL uniqueness
    - **Property 14: Submission URL Uniqueness**
    - **Validates: Requirements 10.2**

- [ ] 11. Implement Site Info and Settings Tests
  - [ ] 11.1 Create site info test file
    - Create `backend/src/__tests__/api/siteInfo.test.js`
    - Test GET /api/site-info returns site configuration
    - Test PUT /api/site-info updates configuration
    - _Requirements: 11.1, 11.2_

  - [ ] 11.2 Create public settings test file
    - Create `backend/src/__tests__/api/publicSettings.test.js`
    - Test GET /api/settings/nav-menus returns navigation tree
    - Test GET /api/settings/footer-groups returns footer data
    - Test GET /api/settings/friend-links returns friend links
    - _Requirements: 13.1, 13.2, 13.3_

  - [ ] 11.3 Write property test for navigation tree structure
    - **Property 16: Navigation Menu Tree Structure**
    - **Validates: Requirements 13.1**

- [ ] 12. Implement Hot Recommendations Tests
  - [ ] 12.1 Create hot recommendations test file
    - Create `backend/src/__tests__/api/hotRecommendations.test.js`
    - Test GET /api/hot-recommendations/active returns active items
    - Test POST /api/hot-recommendations creates recommendation
    - Test POST /api/hot-recommendations/:id/click increments count
    - _Requirements: 12.1, 12.2, 12.3_

- [ ] 13. Implement Click Count Tests
  - [ ] 13.1 Write property test for click count increment
    - **Property 15: Click Count Increment**
    - **Validates: Requirements 8.4, 12.3**

- [ ] 14. Implement Social Media Tests
  - [ ] 14.1 Create social media test file
    - Create `backend/src/__tests__/api/socialMedia.test.js`
    - Test GET /api/social-media returns all configurations
    - Test POST /api/social-media creates configuration
    - Test PUT /api/social-media/:id updates configuration
    - _Requirements: 14.1, 14.2_

- [ ] 15. Final Checkpoint - Run all tests
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 16. Manual Verification
  - [ ] 16.1 Verify API endpoints manually
    - Test health check endpoint
    - Test website CRUD operations
    - Test category CRUD operations
    - Test authentication flow
    - Test submission workflow
    - _Requirements: All_

## Notes

- All test tasks are required for complete coverage
- Each property test references specific requirements for traceability
- Tests use Vitest with fast-check for property-based testing
- Test database isolation ensures tests don't affect production data
