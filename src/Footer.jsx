
export default function Footer() {
    
    const year = new Date().getFullYear()

  return (
    <footer>
       <small>&copy;{year} copyright by Sayem. All right reserved</small>
    </footer>
  )
}