# RRRSS Feed

This is a Ruby on Rails & React RSS Feed Reader.
- Currently showing a Slashdot feed.
- Users can view a list of posts and click them to view more details. 
- Users can also make artiles as 'Read' or 'Unread'

Future update will include adding your own RSS feed urls.

## Getting Started

### Prerequisites

Before getting started, ensure you have the following installed:

- Ruby (version 3.2.1)
- Rails (version 7.1.3)
- SQLite
  
### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/rss-reader-api.git
   ```

2. Navigate to the project directory:   
    ```
    cd rss-reader-api
    ```

#### Backend:

1. Install dependencies:
    ```
    bundle install
    ```

2. Create and migrate the database:
    ```
    rails db:create
    rails db:migrate
    ```

3. Seed the database with initial data (optional):
    ```
    rails db:seed
    ```

4. Start the Rails server:
    ```
    rails server
    ```
5. Visit localhost:3001

#### Frontend:

1. Install dependencies:
    ```
    yarn install
    ```

2. Start Server:
    ```
    yarn start
    ```
3. Visit localhost:3000

#### Test Backend
    rspec
#### Test Frontend
    yarn test

<img width="1727" alt="Screenshot 2024-03-19 at 10 09 18 AM" src="https://github.com/skboyle/RRRSS/assets/31743695/6c465072-811a-48b7-ad20-d82bda4519fd">
<img width="1727" alt="Screenshot 2024-03-19 at 10 09 31 AM" src="https://github.com/skboyle/RRRSS/assets/31743695/09debace-2a59-4d6c-ad82-da9b78ece50b">

