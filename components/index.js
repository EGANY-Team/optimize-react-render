export function Wrapper({ children }) {
  return (
    <div className="vw-100 vh-100 bg-black-20 flex flex-column justify-center items-center sans-serif">
      {children}
    </div>
  )
}

export function Heading({ children }) {
  return <h1 className="green">{children}</h1>
}

export function StyledForm({ children, onSubmit }) {
  return (
    <form
      className="w-100 mw6 bg-white black-90 shadow-4 pa4 bn br1"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  )
}

export function StyledLabel({ htmlFor, children }) {
  return (
    <label className="db bold mb1" htmlFor={htmlFor}>
      {children}
    </label>
  )
}

export function StyledInput({
  type = 'text',
  id,
  name,
  placeholder,
  value,
  onChange,
}) {
  return (
    <input
      className="input-reset db w-100 pa2 ba b--black-10 br1 mb3"
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export function StyledButton({ type = 'button', children, onClick }) {
  return (
    <button
      className="button-reset w-100 tc bg-green white bold pointer dim bn br1 pa2 mt4"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
