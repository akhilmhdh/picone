export default class ImageFormater {
    constructor(image){
        this.image = image
        this.x = 0
        this.y = 0
    }

    getCornerDetection(canvas,callback,threshold){
            var imageScaled = new MarvinImage();
            var imageOut = new MarvinImage(this.image.getWidth(), this.image.getHeight());
            
            const scale = Math.min(canvas.width / this.image.getWidth(), canvas.height / this.image.getHeight())
            this.x =  (canvas.width / 2) - (this.image.getWidth() / 2) * scale;
            this.y = (canvas.height / 2) - (this.image.getHeight() / 2) * scale;

            // Edge Detection (Prewitt approach)
            Marvin.prewitt(this.image, imageOut);
            // Invert color
            Marvin.invertColors(imageOut, imageOut);
            // Threshold
            Marvin.thresholding(imageOut, imageOut, threshold);
            // convert to necessary color
            Marvin.scale(imageOut, imageScaled, Math.round(this.image.getWidth() * scale), Math.round(this.image.getHeight() * scale));
            callback(imageScaled)
            // convert to color required
            return imageScaled
    }

    bw2color(image,canvas,rgb){
        const canvasImage = new MarvinImage(image.getWidth(), image.getHeight());
        for(let y=0; y<image.getHeight(); y++){
            for(let x=0; x<image.getWidth(); x++){
               const red = image.getIntComponent0(x,y);
               if(red !== 255){
                    canvasImage.setIntColor(x, y, rgb[0], rgb[1], rgb[2]);
               }
          }
        } 
        canvasImage.draw(canvas)
    }
}