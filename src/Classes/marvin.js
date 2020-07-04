export default class ImageFormater {
    constructor(image){
        this.image = image
    }

    getCornerDetection(canvas,callback,threshold){
            var imageScaled = new MarvinImage();
            var imageOut = new MarvinImage(this.image.getWidth(), this.image.getHeight());
            
            const scale = Math.min(canvas.width / this.image.getWidth(), canvas.height / this.image.getHeight())
            const x =  (canvas.width / 2) - (this.image.getWidth() / 2) * scale;
            const y = (canvas.height / 2) - (this.image.getHeight() / 2) * scale;

            // Edge Detection (Prewitt approach)
            Marvin.prewitt(this.image, imageOut);
            // Invert color
            Marvin.invertColors(imageOut, imageOut);
            // Threshold
            Marvin.thresholding(imageOut, imageOut, threshold);
            Marvin.scale(imageOut, imageScaled, Math.round(this.image.getWidth() * scale), Math.round(this.image.getHeight() * scale));
            imageScaled.draw(canvas,x,y);
            callback(this.virtualCanvas(imageOut,imageScaled.getWidth()))
    }

    virtualCanvas(image,width,height=128){
        const vritualImage = new MarvinImage();
        Marvin.scale(image.clone(),vritualImage,width,height)
        return vritualImage
    }
}