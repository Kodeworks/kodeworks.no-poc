const Footer = ({children}) => {
  return (
    <footer className="flex items-center justify-center w-full h-24 border-t">
      <address className="flex flex-row items-center mt-3 mb-2 space-x-5 sm:mt-2 sm:mb-0">
        <div className="text-sm not-italic text-left text-grey-700">
          Fjordgata 30 <br />
          7010 Trondheim <br />
          Norway <br />
        </div>
        <div className="text-sm not-italic text-left text-grey-700">
          Organisasjonsnummer 820 478 452 <br />
          Tel.: <a href="tel:+4741670269">+47 416 70 269</a> <br />
          <a href="mailto:post@kodeworks.no">post@kodeworks.no</a>
        </div>
      </address>
      <img src="/Logo.svg" alt="Kodeworks Logo" className="h-4 ml-5" />
      {children}
    </footer>
  )
}

export default Footer
