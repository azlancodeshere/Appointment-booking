#  Syncora - Appointment Booking System

Syncora is a full-stack appointment booking platform that connects clients with different types of professionals.

Clients can discover professionals, view their availability, select available dates and time slots, and send appointment requests.

Professionals can manage their availability and handle appointment requests from clients.

The system currently supports:

-  Doctors
- Lawyers
- Barbers
- Trainers

---

#  Features

## Authentication System

Syncora provides authentication for both clients and professionals.

### Features

- User Registration
- User Login
- JWT based authentication
- Access Token
- Refresh Token
- Cookie based authentication
- Protected user operations
- Role based access
- Client role
- Professional role

---

# User Roles

Syncora has two main types of users.

## Client

A client can:

- Register an account
- Login
- Browse professionals
- Search professionals
- View professional information
- View professional availability
- Select available date
- Select available time slot
- Book an appointment
- View booked appointments
- Check appointment status

---

## Professional

A professional can:

- Register as a professional
- Login
- Manage availability
- Add available dates
- Add multiple time slots
- View appointment requests
- Confirm appointments
- Cancel appointments
- Manage their professional schedule

---

# Supported Professionals

Syncora is designed to support multiple professional services.

##  Doctors

Clients can:

- Browse available doctors
- View doctor information
- View doctor availability
- Select date and time
- Request an appointment

---

## Lawyers

Clients can:

- Browse available lawyers
- Search lawyers
- View lawyer specialization
- View experience
- View gender
- Check consultation availability
- Book an appointment

---

## Barbers

Clients can:

- Browse available barbers
- View barber information
- Check available slots
- Select date and time
- Request an appointment

---

## Trainers

Clients can:

- Browse available trainers
- View trainer information
- Check available slots
- Select date and time
- Request an appointment

---

# Availability Management

Professionals can create their own availability.

A professional can:

1. Select a date
2. Add a start time
3. Add an end time
4. Add multiple slots
5. Save availability

Example:

```text
Date: 12 December 2026

Slot 1
10:00 AM - 11:00 AM

Slot 2
11:00 AM - 12:00 PM

Slot 3
02:00 PM - 03:00 PM

--------

## Flow of project

Client
   │
   ▼
Choose Professional
   │
   ▼
View Availability
   │
   ▼
Select Date
   │
   ▼
Select Time Slot
   │
   ▼
Book Appointment
   │
   ▼
Appointment Request
   │
   ▼
Pending
   │
   ├───────────────┐
   ▼               ▼
Confirmed       Cancelled



