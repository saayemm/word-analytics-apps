
export default function Footer() {
    
    const year = new Date().getFullYear()

  return (
    <footer className="max-w-[1024px] m-auto">
       <small>&copy;{year} copyright by Sayem. All right reserved</small>
    </footer>
  )
}
