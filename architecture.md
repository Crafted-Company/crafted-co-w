# Crafted Co Architecture

## Purpose

Crafted Co is a long-term digital home for everything I create.

The website serves as

- Project showcase
- Development journal
- Creative archive
- Personal hub

It is not an agency website.

It is not an online resume.

It is not an e-commerce platform.

Everything revolves around documenting the process of building products.

---

# Tech Stack

Framework

Next.js (App Router)

Language

TypeScript

Styling

Tailwind CSS v4

Components

shadcn/ui

Animations

Framer Motion

Icons

Lucide React

Database

Supabase

Hosting

Vercel

Image Optimization

Next/Image

Font Loading

next/font

---

# Website Structure

/

Home

/projects

Projects overview

/projects/[slug]

Individual project page

/journal

Development journal

/journal/[slug]

Single journal entry

/about

About

/contact

Contact

---

# Main Navigation

Crafted Co

Projects

Journal

About

Contact

Theme Toggle

---

# Database

Supabase will be the CMS.

No hardcoded project data.

Everything should come from Supabase.

---

Tables

projects

journal_entries

tags

(Optional later)

messages

newsletter

timeline

---

Storage

project-covers

journal-images

profile

future-assets

---

# Project Flow

Each project has

Name

Slug

Description

Cover image

Status

Technologies

Links

Gallery

Featured flag

Created date

Updated date

---

Journal Flow

Every journal entry belongs to one project.

One project

↓

Many journal entries

Journal entries should automatically appear

- inside Journal page
- inside Project page

No duplicate content.

---

# Journal Entry

Contains

Title

Slug

Content

Project

Date

Tags

Featured image

Gallery

Published

---

# Relationships

Project

↓

Journal Entries

↓

Images

Everything should be relational.

Avoid duplicated data.

---

# Content Management

Initially

Content is added directly through Supabase.

Later

A private admin dashboard can be created.

No admin panel in Version 1.

---

# Images

Images stored inside Supabase Storage.

Do not store images inside the repository.

Project covers

Journal screenshots

GIFs

Future videos

should all come from Supabase Storage.

---

# Search

Version 1

Client-side search.

Version 2

Supabase Full Text Search.

---

# Filters

Projects

Apps

Games

Websites

Completed

In Progress

Journal

Project

Year

Tags

---

# Theme

Dark mode first.

Light mode supported.

Both themes follow the same design language.

---

# Performance

Target Lighthouse

95+

Prioritize

Fast loading

Small bundles

Image optimization

Lazy loading

Code splitting

---

# SEO

Every page should generate

Title

Description

Open Graph Image

Twitter Card

Structured Metadata

Canonical URL

Automatically.

---

# Accessibility

Keyboard navigation.

Visible focus states.

Semantic HTML.

Proper heading hierarchy.

Alt text for every image.

Respect reduced motion.

---

# Responsive Design

Desktop first.

Then optimize

Tablet

Mobile

No desktop-only layouts.

---

# Future Features

Authentication

Bookmarks

Project Collections

Timeline

Newsletter

RSS Feed

Search

Comments

Guestbook

Analytics Dashboard

Developer Dashboard

Do not build these initially.

Design the architecture so they can be added later.

---

# Code Quality

Reusable components.

No duplicated UI.

Proper folder organization.

Strict TypeScript.

Readable naming.

Small focused components.

Avoid unnecessary abstraction.

---

# Folder Structure

app/

components/

features/

lib/

hooks/

styles/

types/

public/

---

# Data Fetching

Prefer Server Components.

Use Client Components only when necessary.

Use caching where appropriate.

Avoid unnecessary client-side fetching.

---

# Philosophy

The website should grow naturally.

Adding a new project or journal entry should never require changing the application's structure.

The content should scale from

3 projects

to

300 projects

without redesigning the system.