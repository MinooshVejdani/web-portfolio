export default function SeedPrototype() {
  return (
    <section className="flex flex-col items-center">
      <h3 className="text-2xl font-bold mb-6">Figma Interactive Prototype</h3>
      <div className="aspect-[390/844] w-full max-w-[390px] mx-auto items-center justify-center  bg-red-100">
        <iframe 
          src="https://embed.figma.com/proto/woWiGMR40n801mxcdYL8Oq/SEED?node-id=2355-5114&starting-point-node-id=2355%3A5120&embed-host=share"
          allowFullScreen
          className="  rounded-lg "
        />
      </div>
    </section>
  );
}


{/* <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/proto/woWiGMR40n801mxcdYL8Oq/SEED?node-id=2355-5114&starting-point-node-id=2355%3A5120&content-scaling=fixed&embed-host=share" allowfullscreen></iframe> */}