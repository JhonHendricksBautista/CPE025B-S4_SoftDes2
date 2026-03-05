let Image = function(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

Image.prototype.show = function() {
    console.log(`${this.title} (${this.artist}, ${this.date})`);
}

let images = {
    list: []
};

images.add = function(title, artist, date) {
    let newImage = new Image(title, artist, date);
    this.list.push(newImage);
}


images.show = function() {
    for(let image of this.list) {
        image.show();
    }
}

images.edit = function(title, artist, date) {
    for(let image of this.list) {
        if(image.title === title) {
            image.artist = artist;
            image.date = date;
            break;
        }
    }
}

images.delete = function(title) {
    for(let i=0; i < this.list.length; i++) {
        if(this.list[i].title === title) {
            this.list.splice(i, 1);
            break;
        }
    }
}


images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.show();
console.log("PERFORMING EDIT")
images.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
images.delete('The Last Supper');
images.show();