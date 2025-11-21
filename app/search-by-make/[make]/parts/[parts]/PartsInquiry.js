import React from 'react'
const PartInquiryModal = ({ isOpen, onClose, part, product }) => {
    const today = new Date();
    const date =
        today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time =
        today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const dateTime = date + ' ' + time;

    const [formData, setFormData] = useState({
        Timestamp: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        partList: `${part.partname} (${part.partnumber})`,
    });
    const [loading, setLoading] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;

        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        console.log("formdata", formData)
        formData.Timestamp = dateTime;

        try {
            const response = await fetch('/api/vw-inquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Inquiry submitted successfully!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    address: '',
                    partList: `${part.partname} (${part.partnumber})`,
                });
                onClose();
            } else {
                alert('Error: Failed to submit inquiry.');
            }
        } catch (error) {
            alert('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-4">Inquire Now</h2>
                <form onSubmit={handleSubmit}>
                    {/* Part List (Read-Only) */}
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Part List</label>
                        <input
                            type="text"
                            name="partList"
                            value={formData.partList}
                            readOnly
                            className="w-full px-4 py-2 border rounded-lg bg-gray-200 cursor-not-allowed"
                        />
                    </div>
                    {/* Name */}
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>
                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>
                    {/* Phone */}
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>
                    {/* Address */}
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Address</label>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg"
                            rows="4"
                        />
                    </div>
                    {/* Buttons */}
                    <div className="flex justify-start">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 mr-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
                        >
                            Cancel
                        </button>
                        <button type="submit" disabled={loading}>
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default function PartsInquiry({ part, product }) {
    return (
        <div><div className="grid grid-cols-2  md:grid-cols-2 gap-8">
            <div>
                <Image
                    src={product.image}
                    alt={product.partname}
                    width={400}
                    height={400}
                    className="rounded-lg border"
                />
            </div>

            <div>
                <p className="text-lg font-semibold mb-2">
                    Part Number: {product.partnumber}
                </p>
                <p className="text-gray-700 mb-4">{product.category}</p>

                <h3 className="font-semibold mb-2">Compatible with:</h3>
                <ul className="list-disc pl-5 text-gray-600">
                    {product.compatibility.map((c, i) => (
                        <li key={i}>
                            {c.make} {c.model} {c.years && `(${c.years})`}
                        </li>
                    ))}
                </ul>

                <h3 className="font-semibold mt-4 mb-2">Engines:</h3>
                <p>{product.engine.join(", ")}</p>
                <p>
                    <span className="text-lg font-bold">Price:</span>
                    <span
                        className="ml-2 text-gray-400 bg-gray-200 px-3 py-1 rounded-lg cursor-pointer"
                        style={{
                            filter: 'blur(4px)',
                            userSelect: 'none',
                        }}
                        title="Click 'Inquire Now' to view the price"
                    >
                        $XXX.XX
                    </span>
                </p>

                <div className="mt-6">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
                        Order Now
                    </button>
                </div>
            </div>
        </div></div>
    )
}
