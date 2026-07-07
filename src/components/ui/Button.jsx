export default function Button({ children, type = 'button', href, onClick, className = '' }) {
  const classes = `inline-block bg-black text-white uppercase tracking-widest text-sm font-medium px-8 py-3 transition-opacity duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
