function makeAlbum(artistsName, albumsTitle, tracks) {
    {
        var album = { artistsName: artistsName, albumsTitle: albumsTitle };
        if (tracks) {
            album["tracks"] = tracks;
        }
        return album;
    }
}
console.log(makeAlbum("Artist 1", "First Album"));
console.log(makeAlbum("Artist 2", "Second Album"));
console.log(makeAlbum("Artist 3", "Third Album", 3));
