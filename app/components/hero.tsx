import foto from "../foto.jpeg";

export default function Hero(){
return(
    <div className="container mx-auto p-4 text-center">
    <h1 className="text-grey-400 font-bold">CV Online</h1>
    <h1 className="text-Grey mb-4">Kineta Putri Aurelia</h1>
    <Profile />
    <p className="mt-4 mb-8 text-Grey">
    Saya memiliki berbagai keterampilan yang mendukung kinerja saya, baik dalam lingkungan profesional maupun pribadi. Salah satu keterampilan utama saya adalah analisis data. Saya mampu mengumpulkan, menganalisis, dan menyajikan informasi dengan cara yang mudah dipahami, yang membantu pengambilan keputusan yang lebih baik.
    Selain itu, saya memiliki keterampilan komunikasi yang efektif, baik lisan maupun tulisan. Saya dapat menyampaikan ide dan informasi dengan jelas, serta berkolaborasi dengan tim untuk mencapai tujuan bersama. Keterampilan presentasi saya juga membantu saya untuk berbagi informasi dengan percaya diri di depan audiens.
    </p>
</div>
);

}
function Profile() {
    return <img src={foto.src} alt="CV Andin" className="fotoku w-32 h-32 mx-auto rounded-full"/>;
  }