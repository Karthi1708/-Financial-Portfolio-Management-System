# -Financial-Portfolio-Management-System

# 📊 Financial Portfolio Management System

A web-based application built with **Angular 16** for managing financial portfolios.  
It allows users to track investments, view performance reports, and make informed decisions through an intuitive dashboard.

---

## 🚀 Features

Initialy hav a two nav cards '**Dashboard** and **Investment Portfolio**'

**Dashboard**
- Displays key metrics: Total Investment, Annual Return, Benchmark.
- Visualizes data with interactive **ApexCharts** (Donut & Line charts).

**Investment Portfolio**
- Add investments through a validated form (with TypeScript type checks).
- Review a list of investments using Observables / Subjects.
- Delete investments (mock data for demonstration).

**Form Handling**
- Reactive form with validation (required fields, type checks).
- Shows validation errors clearly before submission.

**Reusable UI**
- Custom **Pipes** (e.g., `customCurrency`) for consistent formatting.
- Custom **Directives** (e.g., `highlight` for dynamic styling on hover).

**Performance & Architecture**
- Lazy loaded feature modules (dashboard, portfolio).
- HTTP interceptors setup (example pattern).
- Responsive web design with SCSS.
- Dependency injection for services

## 📦 Installation

1. Clone the repository:


[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/Karthi1708/-Financial-Portfolio-Management-System)