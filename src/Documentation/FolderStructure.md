# **🔹 Project Structure & Architecture**

**Why?** A well-structured project ensures scalability, maintainability, and readability.

### **✅ Recommended Folder Structure**

```
/my-app
  ├── /src
  │   ├── /components    # Reusable UI components
  │   ├── /pages         # Page components (e.g., Home, About, Dashboard)
  │   ├── /features      # Domain-specific logic (e.g., authentication, payments)
  │   ├── /hooks         # Custom React hooks
  │   ├── /utils         # Helper functions
  │   ├── /services      # API calls and business logic
  │   ├── /context       # Global state management (React Context)
  │   ├── /assets        # Images, fonts, styles
  │   ├── App.tsx         # Main application component
  │   ├── index.tsx       # Entry point
  ├── /public            # Static files
  ├── package.json       # Dependencies and scripts
  ├── .env               # Environment variables
```
