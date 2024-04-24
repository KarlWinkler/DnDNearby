# DnD Nearby

Backend built for DnD Nearby using Django.

## Getting started

#### Downloading the repository
1. Clone the repository `git clone git@github.com:KarlWinkler/DnDNearby-Backend.git`
2. cd into the repository `cd DnDNearby-Backend`

#### Starting the app
3. run the following commands to start the app:
    ```
    make build
    make up
    ```

#### Setting up the database
5. in a new terminal window, run `make migrate`.
6. run `make createsuperuser` to create a superuser and then log in to the admin interface to add edit data.

#### Viewing the app
7. Open your browser and navigate to http://localhost:8000/swagger to take a look at the api documentation.

## Deveopment Process
### Git
  - When making changes to the code, create a new branch and make a pull request to merge the changes into the main branch.
  - follow the naming convention `feature/feature-name` for feature branches and `bugfix/bug-name` for bug branches.
  - follow the naming convention `feat: feature-name` for feature commit messages and `fix: bug-name` for bug commit messages.
### Backend
  - When making changes to models run `make makemigrations` and `make migrate` to apply changes to the database.
  - When updating the seed file dump the database by running `make dump`. Then format the output and move it to `fixtures/fixture.json` file.
