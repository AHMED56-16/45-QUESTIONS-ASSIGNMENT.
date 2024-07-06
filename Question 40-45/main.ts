function makeAlbum(artistsName: string,albumsTitle: string,tracks?:number){
    {
        let album = { artistsName, albumsTitle };
        if (tracks) {
          album["tracks"] = tracks;
        }
        return album;
      }
}
console.log(makeAlbum("Artist 1","First Album"));
console.log(makeAlbum("Artist 2","Second Album"));
console.log(makeAlbum("Artist 3","Third Album", 3));
