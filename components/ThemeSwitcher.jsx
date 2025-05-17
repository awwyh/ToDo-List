export default function ThemeSwitcher({ theme, setTheme }) {
  const themes = ['light', 'dark', 'blue']
  
  return (
    <div className="theme-switcher">
      {themes.map(t => (
        <button
          key={t}
          className={`theme-btn ${t} ${theme === t ? 'active' : ''}`}
          onClick={() => setTheme(t)}
        >
          {t}
        </button>
      ))}
    </div>
  )
}