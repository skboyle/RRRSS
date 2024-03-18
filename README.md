# RRRSS Feed

This is a Ruby on Rails & React RSS Feed Reader.
Currently showing a Slashdot feed.
Users can view a list of posts and click them to view more details. Users can also make artiles as 'Read' or 'Unread'

Future update will include adding your own RSS feed urls.
## Getting Started

### Prerequisites

Before getting started, ensure you have the following installed:

- Ruby (version x.x.x)
- Rails (version x.x.x)
- SQLite (or your preferred database)

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
    Yarn Start
    ```
3. Visit localhost:3000

### Test
#### Backend
    ```
    Rspec
    ```
#### Frontend
    ```
    Yarn Test
    ```

