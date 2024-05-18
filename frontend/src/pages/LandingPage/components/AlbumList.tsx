import AlbumItem from "./AlbumItem";

const AlbumList = () => {
  return (
    <div className=" w-screen h-screen mt-10 flex items-center justify-center flex-col ">
      <AlbumItem />
      <AlbumItem />
      <AlbumItem />
      <AlbumItem />
    </div>
  );
};

export default AlbumList;
