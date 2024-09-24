function Button( {
  toggleSection = (section: string) => {
    document.getElementById(section)?.classList.toggle('active')
  }
})
{
  return <button onClick={() => toggleSection('register')}>Register</button>;
}
export default Button;
  