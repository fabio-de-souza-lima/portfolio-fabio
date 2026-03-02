function Footer() {
  let year = new Date().getFullYear()

  return (
    <div className="flex justify-center bg-(--card-background) text-white select-none">
      <div className="container flex justify-center py-10 select-none">
        <p className="px-6 select-none">
          © {year} <span className="text-(--light-blue) select-none">Fabio de Souza Lima</span> | Todos os direitos reservados.
        </p>
      </div>
    </div>
  )
}

export default Footer
