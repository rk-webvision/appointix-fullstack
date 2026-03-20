# 📦 Appointix Setup Commands (Step 2 — Docker, MySQL, Redis)

---

## 🐳 1. Start Docker Containers

### Command

docker-compose up -d

### 🧠 WHAT

Starts all services defined in docker-compose.yml

### ⚙️ WHY

* Spins up MySQL + Redis
* Runs everything in background

### 🔬 HOW (Internals)

* Reads docker-compose.yml
* Pulls images if not available
* Creates containers
* Starts services

### 📌 FLAGS

* -d → detached mode (runs in background)

---

## 🐳 2. Check Running Containers

### Command

docker ps

### 🧠 WHAT

Lists all currently running containers

### ⚙️ WHY

* Verify MySQL and Redis are running
* Debug issues

### 🔬 HOW

* Queries Docker daemon
* Shows container ID, name, ports

---

## 🐳 3. Stop All Containers

### Command

docker-compose down

### 🧠 WHAT

Stops and removes containers

### ⚙️ WHY

* Clean shutdown
* Reset environment

### 🔬 HOW

* Stops running containers
* Removes network
* Keeps volumes (data safe)

---

## 🐳 4. Restart Containers

### Command

docker-compose restart

### 🧠 WHAT

Restarts all services

### ⚙️ WHY

* Apply config changes
* Fix temporary issues

---

## 🐳 5. View Logs

### Command

docker-compose logs -f

### 🧠 WHAT

Shows logs of all containers

### ⚙️ WHY

* Debug startup issues
* Check DB errors

### 📌 FLAGS

* -f → follow logs (live stream)

---

## 🐳 6. Enter MySQL Container

### Command

docker exec -it appointix-mysql mysql -u root -p

### 🧠 WHAT

Opens MySQL CLI inside container

### ⚙️ WHY

* Test DB connection
* Run queries manually

### 🔬 HOW

* docker exec → run command inside container
* -it → interactive terminal

---

## 🐳 7. Enter Redis CLI

### Command

docker exec -it appointix-redis redis-cli

### 🧠 WHAT

Opens Redis command line tool

### ⚙️ WHY

* Test Redis working
* Debug caching

---

## 🐳 8. Test Redis Connection

### Command

PING

### 🧠 WHAT

Checks if Redis is alive

### ✅ EXPECTED OUTPUT

PONG

---

## 🐳 9. Check All Containers (Including Stopped)

### Command

docker ps -a

### 🧠 WHAT

Shows all containers (running + stopped)

### ⚙️ WHY

* Debug failed containers

---

## 🐳 10. Remove All Containers (Clean Reset)

### Command

docker-compose down -v

### 🧠 WHAT

Stops containers + removes volumes

### ⚙️ WHY

* Full reset (DB will be deleted)

### ⚠️ WARNING

Deletes all MySQL data

---

## 🐳 11. Pull Latest Images

### Command

docker-compose pull

### 🧠 WHAT

Downloads latest versions of images

### ⚙️ WHY

* Keep MySQL/Redis updated

---

## 🐳 12. Rebuild Containers

### Command

docker-compose up --build

### 🧠 WHAT

Rebuilds and starts containers

### ⚙️ WHY

* If config or Dockerfile changes

---

# 🧠 KEY CONCEPT SUMMARY

---

## 🔹 docker-compose

Tool to manage multiple containers together

---

## 🔹 container

Running instance of an image

---

## 🔹 image

Blueprint for container

---

## 🔹 volume

Persistent storage (data saved even if container stops)

---

## 🔹 port mapping

host:container (e.g., 3306:3306)

---

# 🎯 INTERVIEW QUICK LINES

* “docker-compose orchestrates multiple services like MySQL and Redis”
* “docker exec allows running commands inside containers”
* “volumes ensure data persistence beyond container lifecycle”
* “Redis CLI is used to validate in-memory cache operations”

---

# 🚀 END OF STEP 2 COMMANDS
# ☕ Appointix Setup Commands (Step 3 — Spring Boot Backend)

---

## 🚀 1. Navigate to Backend Folder

### Command

cd backend

### 🧠 WHAT

Moves into backend project directory

### ⚙️ WHY

All backend-related commands must run inside this folder

### 🔬 HOW

Changes current working directory in terminal

---

## 🚀 2. Run Spring Boot Application

### Command

./mvnw spring-boot:run

### 🧠 WHAT

Starts Spring Boot application

### ⚙️ WHY

* Builds project
* Starts embedded server (Tomcat)
* Runs backend APIs

### 🔬 HOW (Internals)

* mvnw → Maven Wrapper (project-specific Maven)
* Downloads dependencies
* Compiles code
* Starts Spring Boot

---

## 🚀 3. Fix Permission Issue (if occurs)

### Command

chmod +x mvnw

### 🧠 WHAT

Gives execute permission to mvnw script

### ⚙️ WHY

Required in Linux environments like Codespaces

### 🔬 HOW

Updates file permission bits to allow execution

---

## 🚀 4. Check File Permissions

### Command

ls -l mvnw

### 🧠 WHAT

Displays file permissions

### ⚙️ WHY

Verify mvnw is executable

### 🔬 OUTPUT EXAMPLE

-rwxr-xr-x → executable file

---

## 🚀 5. Clean and Rebuild Project

### Command

./mvnw clean install

### 🧠 WHAT

Cleans and builds project

### ⚙️ WHY

* Removes old builds
* Rebuilds fresh project

### 🔬 HOW

* clean → deletes target folder
* install → compiles + packages

---

## 🚀 6. Run with Debug Logs

### Command

./mvnw spring-boot:run -X

### 🧠 WHAT

Runs app with detailed logs

### ⚙️ WHY

Debug startup issues

---

## 🚀 7. Check If Backend Is Running

### Command

curl http://localhost:8080

### 🧠 WHAT

Tests backend server

### ⚙️ WHY

Verify application is up

---

## 🚀 8. Check MySQL Connection (Optional Debug)

### Command

docker exec -it appointix-mysql mysql -u root -p

### 🧠 WHAT

Opens MySQL CLI inside container

### ⚙️ WHY

Verify DB exists and accessible

---

## 🚀 9. Show Databases in MySQL

### Command

SHOW DATABASES;

### 🧠 WHAT

Lists all databases

### ⚙️ WHY

Confirm "appointix" DB exists

---

# 🧠 KEY CONCEPTS

---

## 🔹 mvnw (Maven Wrapper)

* Project-specific Maven
* No global install required

---

## 🔹 Spring Boot Run Flow

```text
mvnw → compile → start Tomcat → load configs → connect DB → app ready
```

---

## 🔹 Embedded Server

* Spring Boot uses Tomcat internally
* No need to install server separately

---

# 🎯 INTERVIEW QUICK LINES

* “I used Maven Wrapper to ensure consistent build environment.”
* “Spring Boot runs on embedded Tomcat server.”
* “Application startup includes dependency loading and auto-configuration.”

---

# 🚀 END OF STEP 3 COMMANDS
