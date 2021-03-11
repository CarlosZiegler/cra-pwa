export default function FileUpload() {
	const handleUploadImage = (e: any) => {
		alert(e.target.files[0]);
	};

	return (
		<div>
			<label htmlFor="imageUpload">Upload Image</label>
			<input
				id="imageUpload"
				name="imageUpload"
				type="file"
				accept="image/*"
				onChange={handleUploadImage}
			/>
		</div>
	);
}
