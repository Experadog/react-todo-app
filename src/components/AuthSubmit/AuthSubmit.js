
import "./index.scss"

export default function AuthSubmit({caption, isValid}) {
  

  return (
    <button 
      disabled={!isValid} 
      className={isValid ? "submitBtn" : "submitBtn disabledBtn" } 
      type="submit"
    >
      {caption}
    </button>
  )
}