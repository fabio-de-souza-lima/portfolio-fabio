function Footer() {
  let year = new Date().getFullYear()

  return (
    <div className="flex justify-center bg-(--card-background) text-white">
      <div className="container flex justify-center py-10">
        <p className="px-6">© {year} <span className="text-(--light-blue)">Fabio de Souza Lima</span> | Todos os direitos reservados.</p>
      </div>
    </div>
  )
}

export default Footer