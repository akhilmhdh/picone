export default class ImageFormater {
    constructor(){
        this.image =  new MarvinImage();
    }

    getCornerDetection(image,canvas,callback){
        this.image.load(image,() => {
            const imageScaled = new MarvinImage();
            var imageOut = new MarvinImage(this.image.getWidth(), this.image.getHeight());
            const scale = Math.min(canvas.width / this.image.getWidth(), canvas.height / this.image.getHeight())
            const x =  (canvas.width / 2) - (this.image.getWidth() / 2) * scale;
            const y = (canvas.height / 2) - (this.image.getHeight() / 2) * scale;

            // Edge Detection (Prewitt approach)
            Marvin.prewitt(this.image, imageOut);
            // Invert color
            Marvin.invertColors(imageOut, imageOut);
            // Threshold
            Marvin.thresholding(imageOut, imageOut, 220);
            Marvin.scale(imageOut,imageScaled,this.image.getWidth() * scale, this.image.getHeight() * scale)
            imageScaled.draw(canvas,x,y);
            callback(this.virtualCanvas(imageOut))
        })
    }

    virtualCanvas(image,height=500,width=500){
        const scale = Math.min(width / image.getWidth(), height / image.getHeight())
        const x =  (width / 2) - (image.getWidth() / 2) * scale;
        const y = (height / 2) - (image.getHeight() / 2) * scale;
        const vritualImage = new MarvinImage();
        Marvin.scale(image.clone(),vritualImage,image.getWidth() * scale, image.getHeight() * scale)
        return vritualImage
    }
}