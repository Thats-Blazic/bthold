# GoGiV2 - Modern Financial Services Website

A modern, responsive website for financial services built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Contact Form**: Functional contact form with EmailJS integration
- **Multiple Pages**: Home, Services, Company, Team, Contact, and Impressum
- **Dark/Light Mode**: Theme switching capability
- **Professional UI**: Built with shadcn/ui components

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Deployment**: Ready for Vercel/Netlify

## 📁 Project Structure

```
gogiv2/
├── app/                    # Next.js app directory
│   ├── company/           # Company page
│   ├── contact/           # Contact page with form
│   ├── services/          # Services page
│   ├── team/              # Team page
│   ├── impressum/         # Legal page
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── header.tsx        # Navigation header
│   └── theme-provider.tsx # Theme provider
├── public/               # Static assets
└── styles/               # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd gogiv2
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Contact Form Setup

The contact form uses EmailJS for sending emails. To set it up:

1. **Create EmailJS account** at [emailjs.com](https://www.emailjs.com/)
2. **Add email service** (Gmail recommended)
3. **Create email template** with variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{service}}`
   - `{{message}}`
4. **Update credentials** in `app/contact/page.tsx`:
   - Service ID
   - Template ID
   - Public Key

See `EMAILJS_SETUP.md` for detailed instructions.

## 🎨 Customization

### Colors
The primary color scheme uses `#836b55` (brown). You can customize this in:
- `app/globals.css`
- Component files
- Tailwind config

### Content
Update content in respective page files:
- `app/page.tsx` - Home page
- `app/services/page.tsx` - Services
- `app/company/page.tsx` - Company info
- `app/team/page.tsx` - Team members

### Images
Replace images in `public/` directory:
- Logo: `public/LOGO.png`
- Team photos: `public/` (various .jpg files)
- Background images: `public/wood.jpg`, etc.

## 📱 Pages

- **Home** (`/`) - Landing page with hero section
- **Services** (`/services`) - Financial services offered
- **Company** (`/company`) - About the company
- **Team** (`/team`) - Team members and leadership
- **Contact** (`/contact`) - Contact form and information
- **Impressum** (`/impressum`) - Legal information

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload `out/` directory to Netlify

### Other Platforms
The project is compatible with any platform that supports Next.js.

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. For questions or support, contact the development team.

## 📞 Support

For technical support or questions about the website, please use the contact form on the website or reach out to the development team. 