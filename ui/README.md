# Resume Editor React App

A modern React-based resume editor with Tailwind CSS that allows you to edit resume content while preserving the professional format.

## Features

- **A4 Page Layout**: Displays resume in realistic A4 page format
- **Live Editing**: Click on any text to edit it inline
- **PDF Export**: Generate high-quality PDF using html2pdf.js
- **Job Description Analysis**: AI-powered job description analysis (coming soon)
- **Local Storage**: Automatically saves changes locally
- **Responsive Design**: Works on desktop and mobile devices
- **Tailwind CSS**: Modern styling with utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the ui directory:

   ```bash
   cd ui
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Project Structure

```
ui/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── EditableField.js
│   │   ├── ResumeContainer.js
│   │   ├── Sidebar.js
│   │   └── StatusBar.js
│   ├── hooks/
│   │   ├── useEditMode.js
│   │   └── useResumeData.js
│   ├── utils/
│   │   └── pdfGenerator.js
│   ├── App.js
│   ├── index.css
│   └── index.js
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Technologies Used

- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **html2pdf.js**: PDF generation
- **Lucide React**: Modern icon library
- **Local Storage**: Data persistence

## Usage

1. **Enable Edit Mode**: Click the "Enable Edit Mode" button in the sidebar
2. **Edit Content**: Click on any text in the resume to edit it
3. **Save Changes**: Click "Save Changes" to persist your edits
4. **Generate PDF**: Click "Download PDF" to export as PDF
5. **Job Description**: Paste job descriptions for AI analysis (feature coming soon)

## Customization

The resume layout and styling can be customized by:

- Modifying the `ResumeContainer.js` component for layout changes
- Updating `tailwind.config.js` for custom styles
- Editing the default resume data in `useResumeData.js`

## License

This project is private and proprietary.
