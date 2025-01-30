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
   git clone git@github.com:Odarchenko/todo-test-task.git
   cd todo-test-task
   ```

2. **Set up environment variables**:
   Create a `.env` file in the `backend` directory. You can use the `.env.example` file as a reference for the required environment variables.
   ```bash
   cd backend
   cp .env.example .env
   ```

3. **Install dependencies**:
   ```bash
   cd backend
   bundle install
   cd ../frontend
   npm install
   ```

4. **Set up the database**:
   ```bash
   cd backend
   rails db:create
   rails db:migrate
   ```

5. **Start the development server**:
   ```bash
   foreman start -f Procfile.dev
   ```

6. **Access the application**:
   Open your browser and go to [http://localhost:3000](http://localhost:3000).

## API Endpoints

You can find the API documentation at [https://todo-test-task-production.up.railway.app/api-docs/index.html](https://todo-test-task-production.up.railway.app/api-docs/index.html). This documentation includes details about the available endpoints and their usage.

## Testing

To run the tests for the backend, navigate to the `backend` directory and run:

```bash
bundle exec rspec
```

To run the tests for the frontend, navigate to the `frontend` directory and run:

```bash
npm test
```

## Linter

To run the linter for the backend, navigate to the `backend` directory and run:

```bash
cd backend
bundle exec rubocop
```

To run the linter for the frontend, navigate to the `frontend` directory and run:

```bash
cd frontend
npm run lint
```

## Assumptions

In the event that a large number of tasks are added to the application, we assume that pagination will be implemented to enhance user experience and performance. The concept of the solution includes:

- **Frontend Pagination**: Implementing pagination controls in the React frontend to allow users to navigate through tasks easily.
- **Backend Pagination**: Modifying the Rails API to support pagination, enabling the retrieval of a limited number of tasks per request.
- **User Experience**: Ensuring that the pagination is intuitive and provides feedback to users about the total number of tasks and their current position within the list.

This approach will help maintain performance and usability as the number of tasks grows.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
