# Vidya Labs

**Intelligent Digital Solutions for Every Frontier.**

World-class marketing site for Vidya Labs — an elite IT Solutions Hub. Built with React (Vite), Tailwind CSS, Framer Motion, and Lucide React.

## Tech Stack

- **React 19** + **Vite 7**
- **Tailwind CSS 3** — utility-first styling, custom theme (midnight, cyan-electric)
- **Framer Motion** — scroll-reveal and UI animations
- **Lucide React** — icons

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output is in `dist/`.

## Content Updates

All copy, service lists, case studies, and form config live in **`src/data/content.js`**. Edit that file to update headlines, pillars, industries, glossary terms, and success messages without touching components.

## Deploy to Ubuntu VPS (Nginx + Git)

### 1. Server setup (Ubuntu)

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install Nginx
sudo apt install -y nginx

# Install Git
sudo apt install -y git
```

### 2. Clone and build on the server

```bash
# Create app user (optional but recommended)
sudo useradd -m -s /bin/bash vidyalabs
sudo su - vidyalabs

# Clone repo (replace with your repo URL)
git clone https://github.com/your-org/vidyalabs.git
cd vidyalabs

# Install deps and build
npm ci
npm run build
```

The built site is in `dist/`.

### 3. Configure Nginx

Create a site config:

```bash
sudo nano /etc/nginx/sites-available/vidyalabs
```

Paste (replace `your-domain.com` and path if needed):

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    root /home/vidyalabs/vidyalabs/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Enable and reload:

```bash
sudo ln -s /etc/nginx/sites-available/vidyalabs /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 4. HTTPS with Let's Encrypt (recommended)

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

### 5. Deploy updates via Git

On the server:

```bash
cd /home/vidyalabs/vidyalabs
git pull
npm ci
npm run build
```

Nginx already serves `dist/`, so a reload is usually not required. For zero-downtime, consider a small deploy script that builds to a timestamped directory and swaps the Nginx `root` or uses symlinks.

---

**Vidya Labs** — From local retail to global infrastructure.
