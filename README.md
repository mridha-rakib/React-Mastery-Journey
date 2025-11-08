# Superfly Services - Project Requirements Document

## Project Overview

**Business Name:** Superfly Services

**Project Type:** Web-based Cleaning Service Management Platform

**Description:** A full-stack web application that enables customers to book residential cleaning services online, while providing admin and cleaner dashboards for managing jobs, schedules, payments, and service delivery tracking.

---

## 1. Core Modules

### 1.1 Residential Cleaning Module

#### Booking Flow
- **Guest Booking:** Customers can book without creating an account
- **Member Booking:** Customers can register/login to view booking history
- **Quote Generation:** Real-time instant quote based on service selections

#### Service Selection Options
Customers select from the following service categories:
- **Bedrooms:** 1, 2, 3, 4, 5, 6+ options
- **Bathrooms:** 1, 2, 3+ options
- **Kitchen Cleaning:** Yes/No option
- **Garage Cleaning:** Yes/No option
- **Basement Cleaning:** Yes/No option
- **Window Cleaning:** Interior and/or exterior
- **Deep Clean Option:** Yes/No option

#### Pricing Structure
- **Individual Item Pricing Model:** Each service type has a base price
  - Example: 1 bedroom = $X, additional bedrooms = $Y, bathroom = $Z, etc.
- **Price Calculation:** Total quote = sum of all selected services
- **Admin Control:** Admin dashboard to set and update all pricing
- **Cleaner Compensation:** Fixed percentage per service type
  - Example: For $10 bedroom cleaning, cleaner receives $8 (80%), company retains $2 (20%)
  - Percentage varies by service type

#### Recurring Bookings
- Customers can schedule recurring cleanings (e.g., every 3 months, monthly, etc.)
- Automatic reminder notifications 24 hours before each scheduled clean

#### Payment Flow
1. Customer selects services
2. System generates instant quote
3. Customer selects date and time (available slots)
4. Payment processed before booking confirmation
5. Booking assigned to cleaner by admin

#### Notification System
- **24-Hour Pre-Booking Notification:** Via email to customer
- **Notification Options:** Email preferred (SMS capability mentioned but not prioritized)
- **Cleaner Notification:** When assigned to a job

#### Review System
- Customers receive 5-star rating request after job completion
- Optional comment field for feedback

---

### 1.2 Commercial Cleaning Module

#### Booking Flow
1. Commercial client submits site visit form on website
2. Admin/Sales person visits site and discusses contract
3. Admin manually creates booking in dashboard after site visit
4. Admin assigns one or more cleaners to the contract
5. Recurring scheduling set up per contract terms

#### Contract Management
- **Contract Duration:** 1-2 years, with weekly/monthly frequency options
- **Pricing:** Individually set per contract (not through online calculator)
- **Recurring Pattern:** System automatically generates recurring bookings
  - Example: "Every Tuesday and Thursday for 2 years"

#### Scheduling & Tracking
- Manual booking creation by admin
- Individual daily price tracking
- Completed cleanings marked in system
- Monthly invoice generation for billing

#### Payment Flow
- Manual invoicing after job completion
- Customer pays directly (not through website)
- Admin generates invoices from dashboard showing completed jobs for the billing period

#### Cleaner Assignment
- One or more cleaners assigned per contract
- Can be updated if cleaner becomes unavailable
- Cleaner receives notification of assigned jobs

---

### 1.3 Post-Construction Cleaning Module

#### Booking Flow
1. Client submits site visit request through website
2. Admin visits site
3. Admin manually creates booking in dashboard
4. Cleaner assignment and scheduling handled by admin

#### Service Structure
- **Three-Phase Process:**
  - Rough clean
  - Final clean
  - Touch-up clean
- **Scheduling:** All phases within limited timeframe (not recurring over extended period)
- **Pricing:** Individually set per job

#### Cleaner Notifications
- Cleaners notified of assignments and can view in their dashboard
- No automated notifications required (handled manually by admin)

#### Payment Flow
- Manual invoicing after job completion
- Same as commercial: direct payment from client

---

## 2. User Roles & Access Control

### 2.1 Customer/Guest User
**Permissions:**
- Browse cleaning service options
- Request site visit (commercial/post-construction)
- Book residential cleaning as guest
- Create account and become member

**Features:**
- Instant quote calculation
- Booking history (if registered member)
- Recurring booking setup
- Payment submission
- Review/rating submission
- Receive notifications

### 2.2 Cleaner User
**Permissions:**
- View only assigned jobs
- Access personal schedule
- Submit job completion reports

**Dashboard Features:**
- Login required (admin creates cleaner accounts)
- View assigned jobs with complete details:
  - Location
  - Service requirements
  - Customer contact info
  - Assignment details
- Submit before/after photos
- Mark job status (arrived, in progress, completed)
- Submit individual job report (arrival time, start time, end time, before/after photos)

**Note:** Cleaner cannot see other cleaners' jobs or any other system functions

### 2.3 Admin User
**Permissions:**
- Full system access (initially 2 admins)
- Both admins have equal access rights
- Super admin role for adding new admins (future enhancement)

**Dashboard Features:**
- Manage pricing (residential service calculator)
- Create/manage cleaner accounts
- View all bookings and jobs
- Assign cleaners to jobs
- Track job status in real-time
- Manage recurring bookings (commercial/post-construction)
- Generate invoices (commercial/post-construction)
- Create manual bookings (commercial/post-construction)
- Verify job completion via submitted photos
- Send notifications to cleaners
- View cleaner performance and payment tracking

### 2.4 Super Admin (Future Enhancement)
- All admin permissions
- Ability to add/remove admin users

---

## 3. Job Status Workflow

### Residential Cleaning Job Statuses
1. **Booked:** Initial booking created by customer
2. **Scheduled:** Booking confirmed and assigned to cleaner
3. **Cleaner Arrived:** Cleaner marks arrival at location
4. **Clean in Progress:** Cleaner has started work
5. **Clean Completed:** Cleaner has finished work
6. **Job Complete:** Admin verified completion and closed job
7. **Rescheduled:** Job moved to different date/time (if needed)

**Note:** Admin can customize these statuses; exact list to be provided by client

---

## 4. Cleaner Job Verification System

### Submission Requirements
Cleaners submit a form containing:
- Arrival time
- Start time
- End time
- **Before photos:** Required before starting clean
- **After photos:** Required after completion
- Job completion status

### Verification Process
- Admin manually verifies submitted photos
- Admin may conduct on-site verification if needed
- Photos stored in database linked to job record
- Verification is manual process (not automated)

### Multi-Cleaner Jobs
- If multiple cleaners assigned to single job
- Each cleaner submits individual report for the same job
- Each submission tracked separately in database

---

## 5. Database Schema Requirements

### Core Entities

#### Users Table
- user_id (PK)
- email (unique)
- password (hashed)
- phone_number
- first_name
- last_name
- role (customer, cleaner, admin, super_admin)
- status (active, inactive)
- created_at
- updated_at

#### Cleaners Table
- cleaner_id (PK)
- user_id (FK)
- is_active
- hourly_rate
- bio
- created_at
- updated_at

#### Services Table (Pricing Configuration)
- service_id (PK)
- service_name (e.g., "1 Bedroom", "2 Bedrooms", "Kitchen", etc.)
- service_type (bedroom, bathroom, kitchen, garage, basement, window, deep_clean)
- base_price
- cleaner_commission_percentage
- created_at
- updated_at

#### Bookings Table
- booking_id (PK)
- booking_type (residential, commercial, post_construction)
- customer_id (FK, nullable for guest bookings)
- email
- phone_number
- total_price
- payment_status (pending, completed, failed)
- payment_date
- booking_date
- preferred_time_slot
- special_instructions
- recurring_pattern (one_time, weekly, biweekly, monthly, quarterly, etc.)
- recurring_end_date (nullable)
- contract_duration (for commercial/post-construction)
- created_at
- updated_at

#### Booking Services Table (Many-to-Many)
- booking_service_id (PK)
- booking_id (FK)
- service_id (FK)
- quantity
- unit_price
- line_total

#### Jobs Table
- job_id (PK)
- booking_id (FK)
- job_type (residential, commercial, post_construction)
- job_number_in_recurring (for recurring bookings)
- scheduled_date
- scheduled_time
- cleaner_id (FK, nullable initially)
- status (booked, scheduled, cleaner_arrived, in_progress, completed, job_complete, rescheduled)
- created_at
- updated_at

#### Job Assignments Table
- assignment_id (PK)
- job_id (FK)
- cleaner_id (FK)
- assigned_at
- notification_sent_at (nullable)
- created_at

#### Job Reports Table
- report_id (PK)
- job_id (FK)
- cleaner_id (FK)
- arrival_time
- start_time
- end_time
- completion_status
- submitted_at
- created_at

#### Job Photos Table
- photo_id (PK)
- report_id (FK)
- photo_type (before, after)
- photo_url
- uploaded_at

#### Cleaner Payments Table
- payment_id (PK)
- cleaner_id (FK)
- job_id (FK)
- amount
- commission_percentage
- payment_status (pending, completed)
- payment_date (nullable)
- created_at

#### Invoices Table (Commercial/Post-Construction)
- invoice_id (PK)
- booking_id (FK)
- invoice_number (unique)
- invoice_date
- billing_period_start
- billing_period_end
- total_amount
- status (draft, sent, paid, overdue)
- created_at
- updated_at

#### Reviews Table
- review_id (PK)
- booking_id (FK)
- customer_id (FK)
- cleaner_id (FK)
- rating (1-5)
- comment (text)
- created_at

#### Notifications Table
- notification_id (PK)
- user_id (FK)
- notification_type (booking_reminder, job_assigned, job_completed, review_request)
- recipient_email
- recipient_phone
- message
- sent_at
- status (pending, sent, failed)
- created_at

---

## 6. Backend API Endpoints (Overview)

### Authentication
- `POST /api/auth/register` - Customer registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh-token` - Refresh JWT token

### Residential Booking
- `GET /api/services` - Get all available services and current pricing
- `POST /api/bookings/quote` - Generate instant quote
- `POST /api/bookings/create` - Create new booking
- `GET /api/bookings/{id}` - Get booking details
- `GET /api/bookings/customer/{id}` - Get customer's bookings
- `PUT /api/bookings/{id}` - Update booking
- `GET /api/available-slots` - Get available time slots

### Jobs & Assignments
- `GET /api/jobs` - Get all jobs (admin only)
- `GET /api/jobs/cleaner/{id}` - Get jobs for specific cleaner
- `POST /api/jobs/assign` - Assign cleaner to job
- `PUT /api/jobs/{id}/status` - Update job status

### Job Reports
- `POST /api/reports/submit` - Cleaner submits job report
- `POST /api/reports/{id}/photos` - Upload before/after photos
- `GET /api/reports/{id}` - Get job report details

### Admin Dashboard
- `POST /api/admin/services` - Create/update service pricing
- `POST /api/admin/bookings` - Create manual booking (commercial/post-construction)
- `POST /api/admin/cleaners` - Create cleaner account
- `GET /api/admin/dashboard` - Dashboard overview
- `POST /api/admin/invoices` - Generate invoice
- `PUT /api/admin/recurring-bookings` - Setup/update recurring bookings

### Reviews
- `POST /api/reviews` - Submit review
- `GET /api/reviews/booking/{id}` - Get reviews for booking

### Notifications
- `POST /api/notifications/send` - Send notification
- `GET /api/notifications/{user_id}` - Get user notifications

---

## 7. Key Features & Business Logic

### 7.1 Pricing Engine
- Dynamic pricing based on selected services
- Each service has independent price
- Cleaner commission percentage configurable per service
- Admin can modify prices in real-time
- Historical pricing tracking for invoicing accuracy

### 7.2 Scheduling System
- Time slot availability management
- Recurring booking automation
- Collision detection (prevent overbooking)
- Timezone handling

### 7.3 Payment Processing
- Upfront payment required for residential bookings
- Integration with payment gateway (to be specified)
- Payment status tracking
- Refund handling (if applicable)

### 7.4 Notification System
- Email notifications (primary)
- SMS capability (mentioned but lower priority)
- Automated triggers:
  - 24 hours before booking reminder
  - Cleaner assignment notification
  - Job completion notification
  - Review request after completion
- Notification history tracking

### 7.5 Recurring Booking Automation
- Automatic booking generation based on schedule
- Support for various frequencies (weekly, biweekly, monthly, quarterly, etc.)
- For commercial: automatic generation throughout contract period
- For residential: customer-managed recurring bookings

### 7.6 Report & Invoice Generation
- Admin can view all completed jobs for billing period
- Invoice generation for commercial/post-construction clients
- Invoice includes list of services performed with dates
- Invoice document generation (PDF or email format)

---

## 8. Technical Requirements

### Frontend Deliverables
- Responsive web application
- Guest booking interface
- Customer member dashboard
- Cleaner dashboard
- Admin dashboard
- Service selection interface with real-time quote calculation
- Photo upload functionality
- Form validation

### Backend Deliverables
- RESTful API
- Database design and implementation
- Authentication & authorization system
- Payment processing integration
- Email notification system
- File upload system (for photos)
- Recurring job scheduling system
- Reporting system

### Database
- Relational database (SQL)
- Proper indexing for performance
- Foreign key constraints
- Transaction support for payment processing

### Security
- Password hashing (bcrypt or similar)
- JWT token-based authentication
- Role-based access control (RBAC)
- SQL injection prevention
- XSS protection
- CSRF protection
- PCI DSS compliance for payment handling (if applicable)

### Hosting & Deployment
- Client to purchase domain
- Development team handles deployment
- Credentials provided by client as needed

---

## 9. Admin-Provided Information (Pending)

The client will provide:
1. **Pricing Structure:** Excel spreadsheet with:
   - Service pricing for each bedroom/bathroom combination
   - Deep clean pricing
   - Window cleaning pricing
   - Other add-on services
   - Cleaner commission percentages per service

2. **Custom Job Statuses:** Final list of status names and workflow

3. **Branding Assets:**
   - Company logo
   - Color preferences
   - Brand fonts (if specific)

4. **Team Information:** (Later phase)
   - Cleaner names and initial accounts
   - Admin team members

---

## 10. Deployment & Timeline Notes

- **Phase 1:** UI/Design phase (in progress)
- **Phase 2:** Development phase (pending)
- **Phase 3:** Testing & QA
- **Phase 4:** Deployment
- Domain registration can proceed in parallel with development (not required for development phase)
- Google Workspace setup can proceed independently with purchased domain

---

## 11. Future Enhancements

- Super admin role for admin management
- SMS notification integration
- Mobile app (iOS/Android)
- Advanced reporting and analytics
- Integration with accounting software
- Automated payment processing for commercial clients
- Customer feedback and quality scoring system
- Cleaner performance analytics

---

## 12. Critical Notes

- **Manual Verification:** Job completion verification is manual (admin reviews photos), not automated
- **Guest Booking:** Customers do NOT need to create account for residential booking
- **Cleaner Isolation:** Cleaners can only see their own jobs and cannot access other system functions
- **Admin Equality:** Both admins have equal access; no hierarchy (unless super admin role added)
- **Commercial/Post-Construction:** Booking creation is manual by admin, not through customer portal
- **Payment:** Residential bookings require upfront payment; commercial/post-construction handled manually
- **Cleaner Commission:** Structured as percentage of service price, varying by service type
