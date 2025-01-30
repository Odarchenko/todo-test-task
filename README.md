[![CI](https://github.com/Odarchenko/todo-test-task/actions/workflows/main.yml/badge.svg)](https://github.com/Odarchenko/todo-test-task/actions/workflows/main.yml)
# Todo Application

A full-stack todo application built with React frontend and Rails API backend.

## Demo

You can view the live demo of the application at [https://todo-test-task-frontend.vercel.app/](https://todo-test-task-frontend.vercel.app/).

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- Ruby (v3.4.1)
- Rails (v8.0.1)
- Foreman (`gem install foreman`)

## Development

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies**:
   ```bash
   cd backend
   bundle install
   cd ../frontend
   npm install
   ```

3. **Set up the database**:
   ```bash
   cd backend
   rails db:create
   rails db:migrate
   ```

4. **Start the development server**:
   ```bash
   foreman start -f Procfile.dev
   ```

5. **Access the application**:
   Open your browser and go to [http://localhost:3000](http://localhost:3000).

## API Endpoints

You can find the API documentation at [https://todo-test-task-production.up.railway.app/api-docs/index.html](https://todo-test-task-production.up.railway.app/api-docs/index.html). This documentation includes details about the available endpoints and their usage.

Additionally, the CI pipeline includes linters such as ESLint for JavaScript and RuboCop for Ruby to ensure code quality and adherence to best practices.

## Testing

To run the tests for the backend, navigate to the `backend` directory and run:

```bash
bundle exec rspec
```

To run the tests for the frontend, navigate to the `frontend` directory and run:

```bash
npm test
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

