import { useEffect, useState } from "react";

export default function Kategori() {
    const [kategori, setkategori] = useState([]);
    const [loading, setLoading] = useState(true)

    const getKategori = async () => {
        try {
            const res = await fetch("http://localhost:3001/kategori")
            const data = await res.json()
            setKategori(data)
        } catch (err) {
            console.error("Gagal fetch data:", err)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() =>{
        getKategori()
    }, [])
    if (loading){
        return <div className="container mt-4">Sedang memuat data...</div>
    }
    return(
        <div className="container mt-4">
            <div className="d-flex justify-between align-items-center mb-3">
                <h2>Daftar Kategori Gowlist ✨ </h2>
            </div>
            <table className="table table-bordered table-striped">
                <thead className="table-primary">
                    <tr>
                        <th>ID</th>
                        <th>Nama Kategori</th>
                        <th>Deskripsi</th>
                    </tr>
                </thead>
                <tbody>
                    {kategori.length> 0 ? (
                        kategori.map((item)=>(
                            <tr key={item.id_kategori}>
                                <td>{item.id_kategori}</td>
                                <td>{item.nama_kategori}</td>
                                <td>{item.deskripsi}</td>
                            </tr>
                        ))
                    ): (
                        <tr>
                            <td colSpan="4" className="text-centre">
                                Belum ada kategori
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}