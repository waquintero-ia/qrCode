const Card = () => {
  return(
    <>
      <section className="card">
        <div className="card-container">
          <div className="card-content w-320 h-499 bg-white rounded-[20px] px-4 pt-4 pb-10 flex flex-col gap-6 drop-shadow-custom">
            <div className="content-img w-288 h-288 rounded-[10px] overflow-hidden">
              <img src="./images/image-qr-code.png" loading="lazy" decoding="async" alt="qr code"/>
            </div>
            <div className="content-title flex flex-col justify-center items-center gap-4">
              <div className="title text-22 leading-120 font-bold w-256 text-slate-900 text-center">
                Improve your front-end skills by building projects
              </div>
              <div className="description text-15 leading-140 text-center w-256 tracking-[0.2px] text-slate-500">
                Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Card