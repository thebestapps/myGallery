// import { FileEntry } from '@ionic-native/file';

// export const getBlobFromFileEntry = (fileEntry: FileEntry): Promise<Blob> => {
//   return new Promise((resolve, reject) => {
//     fileEntry.file((file) => {
//       const reader = new FileReader();
//       reader.onloadend = function(e) {
//         try {
//           const { result: buffer } = e.target
//           const blob = new Blob(
//             [new Uint8Array(buffer as any)],
//             { type: file.type }
//           );
//           resolve(blob);
//         } catch (error) {
//           reject(error);
//         }
//       };
//       reader.onabort = (ev) => reject(ev);
//       reader.onerror = (ev) => reject(ev);
//       reader.readAsArrayBuffer(file);
//     }, reject)
//   })
// }

// export const delay = (time: number) =>
//   new Promise<void>(resolve => setTimeout(() => resolve(), time))
