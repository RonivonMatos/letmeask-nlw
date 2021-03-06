import { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";

import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";
import { Question } from "../components/Question/index";

import '../styles/room.scss'
import { useRoom } from "../hooks/useRoom";


type RoomParams = {
    id: string;
}

export function Room(){
    const {user} = useAuth();
    const params = useParams<RoomParams>();
    const roomId = params.id;
    const [newQuestion, setNewQuestion] = useState('');

    const {title, questions} = useRoom(roomId)
    
    const info = {"data": [
        {
          "id": 1391349252,
          "title": "Meu Pedaço de Pecado",
          "title_short": "Meu Pedaço de Pecado",
          "title_version": "",
          "link": "https://www.deezer.com/track/1391349252",
          "duration": 157,
          "rank": 999308,
          "explicit_lyrics": false,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "https://cdns-preview-7.dzcdn.net/stream/c-70255a40b7c438c3239e94ba0c909128-3.mp3",
          "md5_image": "44c144f53d3c4e3ca5e8c6b9ee13ed27",
          "position": 1,
          "artist": {
            "id": 135512622,
            "name": "João Gomes",
            "link": "https://www.deezer.com/artist/135512622",
            "picture": "https://api.deezer.com/artist/135512622/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/65e1fbf38b84a7d0380b754452886aa8/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/65e1fbf38b84a7d0380b754452886aa8/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/65e1fbf38b84a7d0380b754452886aa8/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/65e1fbf38b84a7d0380b754452886aa8/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/135512622/top?limit=50",
            "type": "artist"
          },
          "album": {
            "id": 234349272,
            "title": "Eu Tenho a Senha",
            "cover": "https://api.deezer.com/album/234349272/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/44c144f53d3c4e3ca5e8c6b9ee13ed27/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/44c144f53d3c4e3ca5e8c6b9ee13ed27/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/44c144f53d3c4e3ca5e8c6b9ee13ed27/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/44c144f53d3c4e3ca5e8c6b9ee13ed27/1000x1000-000000-80-0-0.jpg",
            "md5_image": "44c144f53d3c4e3ca5e8c6b9ee13ed27",
            "tracklist": "https://api.deezer.com/album/234349272/tracks",
            "type": "album"
          },
          "type": "track"
        },
        {
          "id": 1450292592,
          "title": "Arranhão (Ao Vivo)",
          "title_short": "Arranhão",
          "title_version": "(Ao Vivo)",
          "link": "https://www.deezer.com/track/1450292592",
          "duration": 153,
          "rank": 993200,
          "explicit_lyrics": true,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "https://cdns-preview-7.dzcdn.net/stream/c-7a0cbcd2ee3363ace2cd26c4e0fe9c2d-4.mp3",
          "md5_image": "9d94b664c0ec2abaf3ab7df5429a9546",
          "position": 2,
          "artist": {
            "id": 4876653,
            "name": "Henrique & Juliano",
            "link": "https://www.deezer.com/artist/4876653",
            "picture": "https://api.deezer.com/artist/4876653/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/439d0e35b1c2269ede25e3f30aae8f4c/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/439d0e35b1c2269ede25e3f30aae8f4c/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/439d0e35b1c2269ede25e3f30aae8f4c/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/439d0e35b1c2269ede25e3f30aae8f4c/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/4876653/top?limit=50",
            "type": "artist"
          },
          "album": {
            "id": 248346272,
            "title": "Arranhão (Ao Vivo)",
            "cover": "https://api.deezer.com/album/248346272/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/9d94b664c0ec2abaf3ab7df5429a9546/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/9d94b664c0ec2abaf3ab7df5429a9546/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/9d94b664c0ec2abaf3ab7df5429a9546/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/9d94b664c0ec2abaf3ab7df5429a9546/1000x1000-000000-80-0-0.jpg",
            "md5_image": "9d94b664c0ec2abaf3ab7df5429a9546",
            "tracklist": "https://api.deezer.com/album/248346272/tracks",
            "type": "album"
          },
          "type": "track"
        },
        {
          "id": 1243010562,
          "title": "Baby Me Atende",
          "title_short": "Baby Me Atende",
          "title_version": "",
          "link": "https://www.deezer.com/track/1243010562",
          "duration": 225,
          "rank": 984236,
          "explicit_lyrics": false,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "https://cdns-preview-5.dzcdn.net/stream/c-553433e74ce6e98a172c93c013361627-3.mp3",
          "md5_image": "8b7b834417a1b86c6becd9873acdfee2",
          "position": 3,
          "artist": {
            "id": 5566782,
            "name": "Matheus Fernandes",
            "link": "https://www.deezer.com/artist/5566782",
            "picture": "https://api.deezer.com/artist/5566782/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/78409ccafb4f4e1cb3c6be6ba158dc69/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/78409ccafb4f4e1cb3c6be6ba158dc69/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/78409ccafb4f4e1cb3c6be6ba158dc69/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/78409ccafb4f4e1cb3c6be6ba158dc69/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/5566782/top?limit=50",
            "type": "artist"
          },
          "album": {
            "id": 207458032,
            "title": "Baby Me Atende",
            "cover": "https://api.deezer.com/album/207458032/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/8b7b834417a1b86c6becd9873acdfee2/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/8b7b834417a1b86c6becd9873acdfee2/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/8b7b834417a1b86c6becd9873acdfee2/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/8b7b834417a1b86c6becd9873acdfee2/1000x1000-000000-80-0-0.jpg",
            "md5_image": "8b7b834417a1b86c6becd9873acdfee2",
            "tracklist": "https://api.deezer.com/album/207458032/tracks",
            "type": "album"
          },
          "type": "track"
        },
        {
          "id": 1442170372,
          "title": "Rolê",
          "title_short": "Rolê",
          "title_version": "",
          "link": "https://www.deezer.com/track/1442170372",
          "duration": 174,
          "rank": 973676,
          "explicit_lyrics": false,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "https://cdns-preview-f.dzcdn.net/stream/c-f6bf603194f05469680cf4240641fb21-3.mp3",
          "md5_image": "58083a6d7a92ff7585f304e9d1934ad4",
          "position": 4,
          "artist": {
            "id": 84292982,
            "name": "Tarcísio do Acordeon",
            "link": "https://www.deezer.com/artist/84292982",
            "picture": "https://api.deezer.com/artist/84292982/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/68710c4f2fbfb8d90e4967d2a50e1da3/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/68710c4f2fbfb8d90e4967d2a50e1da3/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/68710c4f2fbfb8d90e4967d2a50e1da3/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/68710c4f2fbfb8d90e4967d2a50e1da3/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/84292982/top?limit=50",
            "type": "artist"
          },
          "album": {
            "id": 246523402,
            "title": "Rolê",
            "cover": "https://api.deezer.com/album/246523402/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/58083a6d7a92ff7585f304e9d1934ad4/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/58083a6d7a92ff7585f304e9d1934ad4/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/58083a6d7a92ff7585f304e9d1934ad4/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/58083a6d7a92ff7585f304e9d1934ad4/1000x1000-000000-80-0-0.jpg",
            "md5_image": "58083a6d7a92ff7585f304e9d1934ad4",
            "tracklist": "https://api.deezer.com/album/246523402/tracks",
            "type": "album"
          },
          "type": "track"
        },
        {
          "id": 1391349282,
          "title": "Aquelas Coisas",
          "title_short": "Aquelas Coisas",
          "title_version": "",
          "link": "https://www.deezer.com/track/1391349282",
          "duration": 147,
          "rank": 995912,
          "explicit_lyrics": false,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "https://cdns-preview-0.dzcdn.net/stream/c-0b9b2db9244ca982c80142a2bccd7b2c-3.mp3",
          "md5_image": "44c144f53d3c4e3ca5e8c6b9ee13ed27",
          "position": 5,
          "artist": {
            "id": 135512622,
            "name": "João Gomes",
            "link": "https://www.deezer.com/artist/135512622",
            "picture": "https://api.deezer.com/artist/135512622/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/65e1fbf38b84a7d0380b754452886aa8/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/65e1fbf38b84a7d0380b754452886aa8/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/65e1fbf38b84a7d0380b754452886aa8/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/65e1fbf38b84a7d0380b754452886aa8/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/135512622/top?limit=50",
            "type": "artist"
          },
          "album": {
            "id": 234349272,
            "title": "Eu Tenho a Senha",
            "cover": "https://api.deezer.com/album/234349272/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/44c144f53d3c4e3ca5e8c6b9ee13ed27/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/44c144f53d3c4e3ca5e8c6b9ee13ed27/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/44c144f53d3c4e3ca5e8c6b9ee13ed27/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/44c144f53d3c4e3ca5e8c6b9ee13ed27/1000x1000-000000-80-0-0.jpg",
            "md5_image": "44c144f53d3c4e3ca5e8c6b9ee13ed27",
            "tracklist": "https://api.deezer.com/album/234349272/tracks",
            "type": "album"
          },
          "type": "track"
        },
        {
          "id": 1451144022,
          "title": "Quer Voar",
          "title_short": "Quer Voar",
          "title_version": "",
          "link": "https://www.deezer.com/track/1451144022",
          "duration": 187,
          "rank": 997873,
          "explicit_lyrics": false,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "https://cdns-preview-0.dzcdn.net/stream/c-079cf195cc5a22d08269bd95ffc4e2e2-3.mp3",
          "md5_image": "d55994c64798a408619d647c60e1c249",
          "position": 6,
          "artist": {
            "id": 11329214,
            "name": "Matuê",
            "link": "https://www.deezer.com/artist/11329214",
            "picture": "https://api.deezer.com/artist/11329214/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/2adf59167269acd8141387c2ab652b06/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/2adf59167269acd8141387c2ab652b06/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/2adf59167269acd8141387c2ab652b06/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/2adf59167269acd8141387c2ab652b06/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/11329214/top?limit=50",
            "type": "artist"
          },
          "album": {
            "id": 248550452,
            "title": "Quer Voar",
            "cover": "https://api.deezer.com/album/248550452/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/d55994c64798a408619d647c60e1c249/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/d55994c64798a408619d647c60e1c249/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/d55994c64798a408619d647c60e1c249/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/d55994c64798a408619d647c60e1c249/1000x1000-000000-80-0-0.jpg",
            "md5_image": "d55994c64798a408619d647c60e1c249",
            "tracklist": "https://api.deezer.com/album/248550452/tracks",
            "type": "album"
          },
          "type": "track"
        },
        {
          "id": 1397354732,
          "title": "MORENA",
          "title_short": "MORENA",
          "title_version": "",
          "link": "https://www.deezer.com/track/1397354732",
          "duration": 193,
          "rank": 985335,
          "explicit_lyrics": false,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "https://cdns-preview-0.dzcdn.net/stream/c-029650b3975d7154fadfb718e1773f84-3.mp3",
          "md5_image": "b32ab2ab02b5065de09f01c9621c7f21",
          "position": 7,
          "artist": {
            "id": 1264078,
            "name": "Luan Santana",
            "link": "https://www.deezer.com/artist/1264078",
            "picture": "https://api.deezer.com/artist/1264078/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/d3bc9e1593e1a27af3ce7cb43d2169a7/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/d3bc9e1593e1a27af3ce7cb43d2169a7/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/d3bc9e1593e1a27af3ce7cb43d2169a7/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/d3bc9e1593e1a27af3ce7cb43d2169a7/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/1264078/top?limit=50",
            "type": "artist"
          },
          "album": {
            "id": 235741762,
            "title": "MORENA",
            "cover": "https://api.deezer.com/album/235741762/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/b32ab2ab02b5065de09f01c9621c7f21/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/b32ab2ab02b5065de09f01c9621c7f21/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/b32ab2ab02b5065de09f01c9621c7f21/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/b32ab2ab02b5065de09f01c9621c7f21/1000x1000-000000-80-0-0.jpg",
            "md5_image": "b32ab2ab02b5065de09f01c9621c7f21",
            "tracklist": "https://api.deezer.com/album/235741762/tracks",
            "type": "album"
          },
          "type": "track"
        },
        {
          "id": 1404805642,
          "title": "Se Joga no Passinho",
          "title_short": "Se Joga no Passinho",
          "title_version": "",
          "link": "https://www.deezer.com/track/1404805642",
          "duration": 200,
          "rank": 997636,
          "explicit_lyrics": false,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "https://cdns-preview-0.dzcdn.net/stream/c-0200f1c343a697cdd16d55a29c75bfb1-4.mp3",
          "md5_image": "e4ef2b0c37135fc5410b114af9830d64",
          "position": 8,
          "artist": {
            "id": 56731592,
            "name": "Brisa Star",
            "link": "https://www.deezer.com/artist/56731592",
            "picture": "https://api.deezer.com/artist/56731592/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/dcd0f77bb2313f1e26a2ae7fe49adbc8/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/dcd0f77bb2313f1e26a2ae7fe49adbc8/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/dcd0f77bb2313f1e26a2ae7fe49adbc8/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/dcd0f77bb2313f1e26a2ae7fe49adbc8/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/56731592/top?limit=50",
            "type": "artist"
          },
          "album": {
            "id": 237363182,
            "title": "Se Joga no Passinho",
            "cover": "https://api.deezer.com/album/237363182/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/e4ef2b0c37135fc5410b114af9830d64/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/e4ef2b0c37135fc5410b114af9830d64/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/e4ef2b0c37135fc5410b114af9830d64/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/e4ef2b0c37135fc5410b114af9830d64/1000x1000-000000-80-0-0.jpg",
            "md5_image": "e4ef2b0c37135fc5410b114af9830d64",
            "tracklist": "https://api.deezer.com/album/237363182/tracks",
            "type": "album"
          },
          "type": "track"
        },
        {
          "id": 1421455182,
          "title": "Senta Danada",
          "title_short": "Senta Danada",
          "title_version": "",
          "link": "https://www.deezer.com/track/1421455182",
          "duration": 172,
          "rank": 971439,
          "explicit_lyrics": false,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "https://cdns-preview-6.dzcdn.net/stream/c-689d79e57422002c7e78d335c278f04c-3.mp3",
          "md5_image": "b2c9b23ea852f37b6d7656871fe80716",
          "position": 9,
          "artist": {
            "id": 5576810,
            "name": "Zé Felipe",
            "link": "https://www.deezer.com/artist/5576810",
            "picture": "https://api.deezer.com/artist/5576810/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/8154afc2fe92ac76cb38ab97a44e627a/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/8154afc2fe92ac76cb38ab97a44e627a/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/8154afc2fe92ac76cb38ab97a44e627a/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/8154afc2fe92ac76cb38ab97a44e627a/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/5576810/top?limit=50",
            "type": "artist"
          },
          "album": {
            "id": 241412452,
            "title": "Senta Danada",
            "cover": "https://api.deezer.com/album/241412452/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/b2c9b23ea852f37b6d7656871fe80716/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/b2c9b23ea852f37b6d7656871fe80716/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/b2c9b23ea852f37b6d7656871fe80716/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/b2c9b23ea852f37b6d7656871fe80716/1000x1000-000000-80-0-0.jpg",
            "md5_image": "b2c9b23ea852f37b6d7656871fe80716",
            "tracklist": "https://api.deezer.com/album/241412452/tracks",
            "type": "album"
          },
          "type": "track"
        },
        {
          "id": 1397165102,
          "title": "Ficha Limpa",
          "title_short": "Ficha Limpa",
          "title_version": "",
          "link": "https://www.deezer.com/track/1397165102",
          "duration": 192,
          "rank": 983356,
          "explicit_lyrics": false,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "https://cdns-preview-1.dzcdn.net/stream/c-1a227d91a0177bd6e3756f4b369056c7-3.mp3",
          "md5_image": "f4ffd093b21dced29b7bffdda3b007be",
          "position": 10,
          "artist": {
            "id": 1541592,
            "name": "Gusttavo Lima",
            "link": "https://www.deezer.com/artist/1541592",
            "picture": "https://api.deezer.com/artist/1541592/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/afe25419769a78d0bf522a2e9d96743f/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/afe25419769a78d0bf522a2e9d96743f/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/afe25419769a78d0bf522a2e9d96743f/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/afe25419769a78d0bf522a2e9d96743f/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/1541592/top?limit=50",
            "type": "artist"
          },
          "album": {
            "id": 235704972,
            "title": "Falando de Amor, Vol. 1",
            "cover": "https://api.deezer.com/album/235704972/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/f4ffd093b21dced29b7bffdda3b007be/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/f4ffd093b21dced29b7bffdda3b007be/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/f4ffd093b21dced29b7bffdda3b007be/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/f4ffd093b21dced29b7bffdda3b007be/1000x1000-000000-80-0-0.jpg",
            "md5_image": "f4ffd093b21dced29b7bffdda3b007be",
            "tracklist": "https://api.deezer.com/album/235704972/tracks",
            "type": "album"
          },
          "type": "track"
        }
      ],
      "total": 10
    }

    const tracks = info.data


    async function handleSendQuestion(event:FormEvent){
        event.preventDefault();

        if(newQuestion.trim()===''){
            return;
        }

        if (!user){
            throw new Error('You must be logged in')
        }

        const question = {
            content: newQuestion,
            author: {
                name: user.name,
                avatar: user.avatar,
            },
            isHighlighted: false,
            isAnswered: false
        };
    
        await database.ref(`rooms/${roomId}/questions`).push(question)
    
        setNewQuestion('')
    }


    return(

        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <RoomCode code={roomId}/>
                </div>
            </header>

            <main className = "content">
                <div className = "room-title">
                    <h1>Sala {title}</h1>
                    <span>{questions.length>0 && <span>{questions.length} pergunta(s)</span>}</span>
                </div>

                <form onSubmit={handleSendQuestion}>
                    <textarea placeholder="O que você quer perguntar?" 
                    onChange={event=> setNewQuestion(event.target.value)}
                    value={newQuestion}
                    />

                    <div className="form-footer">
                        {user ? (
                            <div className = "user-info">
                                <img src={user.avatar} alt={user.name} />
                                <span>{user.name}</span>
                            </div>
                        ) : (
                             <span>Para enviar uma pergunta, <button>faça seu login</button>.</span>
                        )}
                       
                        <Button type="submit" disabled={!user}>Enviar pergunta</Button>
                    </div>
                </form>

                <div className = "question-list">
                {questions.map(question => {
                    return(
                        <Question
                          key={question.id}
                          content = {question.content}
                          author = {question.author}
                        />
                    )
                })}
                </div>
                <div className="tracks">
                    return(
                        <div>
                            {tracks}
                        </div>
                    )
                </div>

            </main> 
        </div>

    )
}