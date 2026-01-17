# Requirements Document

## Introduction

本规范定义了导航网站项目的核心功能测试需求，重点测试网站添加、分类管理和前端展示功能。

## Glossary

- **Backend_API**: 后端 Express.js 服务提供的 RESTful 接口
- **Frontend**: React 前端应用，展示导航网站内容
- **Admin_Panel**: 管理后台，用于内容管理和系统配置
- **Category**: 网站分类，支持多级结构（父分类和子分类）
- **Website**: 导航网站中收录的网站条目，包含名称、URL、描述、图标等信息
- **Subcategory**: 子分类，属于某个父分类下的二级分类

## Requirements

### Requirement 1: Website Addition

**User Story:** As an admin, I want to add new websites to the navigation system, so that users can discover new resources.

#### Acceptance Criteria

1. WHEN a POST request with valid website data is sent to /api/websites THEN the Backend_API SHALL create a new website entry and return the created data
2. WHEN a website is created with a category ID THEN the Backend_API SHALL associate the website with that category
3. WHEN a website URL already exists THEN the Backend_API SHALL return a duplicate error
4. WHEN required fields are missing THEN the Backend_API SHALL return a validation error with specific field information
5. WHEN a website is successfully added THEN the Backend_API SHALL return the website with its assigned ID

### Requirement 2: Category Management

**User Story:** As an admin, I want to manage website categories, so that websites can be organized logically.

#### Acceptance Criteria

1. WHEN a GET request is sent to /api/categories THEN the Backend_API SHALL return all categories with their subcategories
2. WHEN a POST request with valid category data is sent THEN the Backend_API SHALL create a new category
3. WHEN creating a subcategory with a parent ID THEN the Backend_API SHALL nest it under the parent category
4. WHEN a category is deleted THEN the Backend_API SHALL handle associated websites appropriately
5. WHEN updating a category THEN the Backend_API SHALL persist the changes and return updated data

### Requirement 3: Website-Category Association

**User Story:** As an admin, I want to assign websites to categories, so that users can browse websites by category.

#### Acceptance Criteria

1. WHEN a website is assigned to a category THEN the Backend_API SHALL update the website's category reference
2. WHEN fetching websites by category ID THEN the Backend_API SHALL return only websites in that category
3. WHEN a category has subcategories THEN the Backend_API SHALL support filtering websites by subcategory
4. WHEN moving a website to a different category THEN the Backend_API SHALL update the association correctly

### Requirement 4: Frontend Category Display

**User Story:** As a user, I want to browse websites by category, so that I can find relevant resources easily.

#### Acceptance Criteria

1. WHEN the home page loads THEN the Frontend SHALL display category navigation
2. WHEN a category is selected THEN the Frontend SHALL display all websites in that category
3. WHEN a category has subcategories THEN the Frontend SHALL display subcategory filters
4. WHEN websites are loaded THEN the Frontend SHALL display website cards with name, icon, and description

### Requirement 5: Frontend Website Display

**User Story:** As a user, I want to see website details clearly, so that I can decide which websites to visit.

#### Acceptance Criteria

1. WHEN websites are displayed THEN the Frontend SHALL show website favicon or icon
2. WHEN a website card is rendered THEN the Frontend SHALL display the website name and description
3. WHEN clicking a website THEN the Frontend SHALL navigate to the website URL or show details
4. WHEN websites are loading THEN the Frontend SHALL display loading skeletons

### Requirement 6: API Data Retrieval

**User Story:** As a developer, I want to verify API endpoints return correct data, so that the frontend can display accurate information.

#### Acceptance Criteria

1. WHEN fetching /api/websites THEN the Backend_API SHALL return paginated website data
2. WHEN fetching /api/categories THEN the Backend_API SHALL return hierarchical category structure
3. WHEN fetching /api/pages THEN the Backend_API SHALL return page configuration data
4. WHEN an API error occurs THEN the Backend_API SHALL return appropriate error codes and messages

### Requirement 7: Authentication System

**User Story:** As an admin, I want to securely log in to the admin panel, so that I can manage the website content.

#### Acceptance Criteria

1. WHEN valid credentials are provided to /api/auth/login THEN the Backend_API SHALL return a JWT token and user info
2. WHEN invalid credentials are provided THEN the Backend_API SHALL return a 401 unauthorized error
3. WHEN a valid token is provided to /api/auth/verify THEN the Backend_API SHALL confirm the token is valid
4. WHEN an expired or invalid token is provided THEN the Backend_API SHALL return a 401 error
5. WHEN changing password with correct old password THEN the Backend_API SHALL update the password

### Requirement 8: Banner Management

**User Story:** As an admin, I want to manage banners, so that I can display promotional content on the website.

#### Acceptance Criteria

1. WHEN fetching /api/banners THEN the Backend_API SHALL return all banners
2. WHEN fetching /api/banners/active THEN the Backend_API SHALL return only visible banners within valid date range
3. WHEN creating a banner THEN the Backend_API SHALL save and return the new banner
4. WHEN clicking a banner THEN the Backend_API SHALL increment the click count

### Requirement 9: Page Configuration

**User Story:** As an admin, I want to configure pages, so that I can customize the website layout and content.

#### Acceptance Criteria

1. WHEN fetching /api/pages/:slug/full THEN the Backend_API SHALL return complete page data with categories and websites
2. WHEN searching within a page THEN the Backend_API SHALL return matching websites with relevance scores
3. WHEN fetching /api/pages/:slug/hot THEN the Backend_API SHALL return hot websites for that page
4. WHEN creating or updating a page THEN the Backend_API SHALL persist the configuration

### Requirement 10: Website Submission

**User Story:** As a user, I want to submit websites for review, so that I can contribute to the navigation directory.

#### Acceptance Criteria

1. WHEN submitting a website THEN the Backend_API SHALL create a pending submission record
2. WHEN checking if a URL exists THEN the Backend_API SHALL return whether it's already in the database or pending
3. WHEN approving a submission THEN the Backend_API SHALL create a website and update submission status
4. WHEN rejecting a submission THEN the Backend_API SHALL update status with rejection reason

### Requirement 11: Site Information

**User Story:** As an admin, I want to manage site information, so that I can update the website's branding and metadata.

#### Acceptance Criteria

1. WHEN fetching /api/site-info THEN the Backend_API SHALL return site configuration
2. WHEN updating site info THEN the Backend_API SHALL persist changes and clear cache

### Requirement 12: Hot Recommendations

**User Story:** As an admin, I want to manage hot recommendations, so that I can highlight featured content.

#### Acceptance Criteria

1. WHEN fetching /api/hot-recommendations/active THEN the Backend_API SHALL return visible recommendations within valid date range
2. WHEN creating a recommendation THEN the Backend_API SHALL save with proper page and position settings
3. WHEN clicking a recommendation THEN the Backend_API SHALL increment the click count

### Requirement 13: Public Settings

**User Story:** As a user, I want to see navigation menus and footer links, so that I can navigate the website easily.

#### Acceptance Criteria

1. WHEN fetching /api/settings/nav-menus THEN the Backend_API SHALL return visible navigation menus in tree structure
2. WHEN fetching /api/settings/footer-groups THEN the Backend_API SHALL return footer groups with links
3. WHEN fetching /api/settings/friend-links THEN the Backend_API SHALL return visible friend links

### Requirement 14: Social Media Links

**User Story:** As a user, I want to see social media links, so that I can follow the website on social platforms.

#### Acceptance Criteria

1. WHEN fetching /api/social-media THEN the Backend_API SHALL return all social media configurations
2. WHEN creating or updating social media THEN the Backend_API SHALL persist the configuration
