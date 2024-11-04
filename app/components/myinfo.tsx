const MyInfos = {
    ttl: "Bandung, 16 Juli 2004",
    gender: "Perempuan",
    tinggiBadan: "153 cm",
    beratBadan: "45 kg",
    statusPernikahan: "Belum Menikah",
    whatsapp: "081224087384",
    email: "kinetaputri16@gmail.com"
  };
  
  export default function MyApp() {
    return (
      <div className="container mx-auto p-2 text-center pt-10">
        <h2 className="text-grey font-bold">INFORMASI PRIBADI</h2>
        <div className="border-2 border-pink-300/75 rounded-lg bg-pink-300 text-black p-4 my-5">
          <div className="container mx-auto">
            <div className="flex flex-col space-y-2">
              <div className="text-left"><strong>TTL:</strong> {MyInfos.ttl}</div>
              <div className="text-left"><strong>Gender:</strong> {MyInfos.gender}</div>
              <div className="text-left"><strong>Tinggi Badan:</strong> {MyInfos.tinggiBadan}</div>
              <div className="text-left"><strong>Berat Badan:</strong> {MyInfos.beratBadan}</div>
              <div className="text-left"><strong>Status Pernikahan:</strong> {MyInfos.statusPernikahan}</div>
              <div className="text-left"><strong>Whatsapp:</strong> {MyInfos.whatsapp}</div>
              <div className="text-left"><strong>Email:</strong> {MyInfos.email}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  