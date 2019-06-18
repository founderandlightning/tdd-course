## Homework (Assignments)

Please do the tasks in the order specified with a commit per task. Also please follow Test-driven approach (tests before code).

Below are the tasks : 

1. **Create a feature test to see if the user get 200 status on root.**

 &nbsp; &nbsp; *Acceptance Criteria*

- Create a basic feature test



2. **Create a registration flow for an app.**

 &nbsp; &nbsp; *Acceptance Criteria*

- A new user on visiting ‘/’ sees ‘Hello Ucreate’
- On clicking ‘register’ button, there is a registration form with heading ‘Register’
- On successful adding the user data in form, the user data get saved and it sees ‘successful registration’
- Failure cases : 
-- Email not valid
-- Required name
- And the user get redirected to register url

``

3. **Create a login flow for an app.**

 &nbsp; &nbsp; *Acceptance Criteria*

- A new user on visiting ‘/’ sees ‘Hello Ucreate’
- On clicking login button, there is a login form with heading ‘login here’
- On successful adding the user data in form, the user get authenticated and sees ‘welcome’
- Failure cases : 
-- Email not valid
-- Required password
--And the user get redirected to login url if not authenticated 
- ‘/logout’ -POST to logout for currently authenticated user

```
