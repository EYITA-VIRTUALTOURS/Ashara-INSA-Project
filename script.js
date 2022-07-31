(function(){
    var script = {
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.MapViewer",
  "this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A",
  "this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028",
  "this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E",
  "this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16",
  "this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431",
  "this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A"
 ],
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "scrollBarWidth": 10,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.playList_4A73C791_5371_1A2E_41BF_A69702C745A8.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "propagateClick": true,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "verticalAlign": "top",
 "class": "Player",
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "width": "100%",
 "desktopMipmappingEnabled": false,
 "paddingRight": 0,
 "minHeight": 20,
 "defaultVRPointer": "laser",
 "definitions": [{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4A4FD7CD_5371_1A36_41C1_F74B8678CC4D",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 140.18,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_44D548B1_5371_166E_4173_9C3244751580",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -19.22,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D22582_5391_611E_41BF_A8CE6B760F0D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_59D22582_5391_611E_41BF_A8CE6B760F0D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D22582_5391_611E_41BF_A8CE6B760F0D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_59D22582_5391_611E_41BF_A8CE6B760F0D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D22582_5391_611E_41BF_A8CE6B760F0D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_59D22582_5391_611E_41BF_A8CE6B760F0D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D22582_5391_611E_41BF_A8CE6B760F0D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_59D22582_5391_611E_41BF_A8CE6B760F0D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D22582_5391_611E_41BF_A8CE6B760F0D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_59D22582_5391_611E_41BF_A8CE6B760F0D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D22582_5391_611E_41BF_A8CE6B760F0D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_59D22582_5391_611E_41BF_A8CE6B760F0D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_59D22582_5391_611E_41BF_A8CE6B760F0D_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "P _ 003",
 "id": "panorama_59D22582_5391_611E_41BF_A8CE6B760F0D",
 "hfov": 360,
 "overlays": [
  "this.overlay_5EA2CC9F_53B2_E726_41CA_282516FCD5C3",
  "this.overlay_5EF8F2FC_53B3_20EA_41D1_C82132502126",
  "this.overlay_43E01D45_5391_2E36_41CB_A690F28AD7F6",
  "this.overlay_42115932_5391_3652_41AC_7F9F0F711A3F",
  "this.panorama_59D22582_5391_611E_41BF_A8CE6B760F0D_tcap0"
 ],
 "pitch": 0,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -149.48,
   "yaw": 27.51,
   "panorama": "this.panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -149.48,
   "yaw": 29.63,
   "panorama": "this.panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -149.48,
   "yaw": -40.88,
   "panorama": "this.panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 160.78,
   "yaw": -39.82,
   "panorama": "this.panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_59D22582_5391_611E_41BF_A8CE6B760F0D_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_49E1B81B_5371_1652_41A8_230F58C90EC4",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 105.89,
  "pitch": 0
 }
},
{
 "class": "Map",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "label": "Incubation Plan 01",
 "id": "map_42382952_53F3_16D2_41C3_9680B6F13AFA",
 "height": 3307,
 "width": 2339,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "scaleMode": "fit_inside",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_42382952_53F3_16D2_41C3_9680B6F13AFA.png",
    "class": "ImageResourceLevel",
    "width": 2263,
    "height": 3200
   },
   {
    "url": "media/map_42382952_53F3_16D2_41C3_9680B6F13AFA_lq.png",
    "class": "ImageResourceLevel",
    "tags": "preload",
    "width": 215,
    "height": 305
   }
  ]
 },
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "fieldOfViewOverlayRadiusScale": 0.3,
 "thumbnailUrl": "media/map_42382952_53F3_16D2_41C3_9680B6F13AFA_t.png",
 "initialZoomFactor": 1,
 "fieldOfViewOverlayInsideColor": "#FFFFFF"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_46A8FE2A_5391_2A72_41AD_F3702922E87D_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_498D2867_5371_16F2_41C0_4D469CBCA3BD",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 30.52,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4B848894_5397_1657_41D3_C8A0009D2D03_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4B848894_5397_1657_41D3_C8A0009D2D03_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4B848894_5397_1657_41D3_C8A0009D2D03_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4B848894_5397_1657_41D3_C8A0009D2D03_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4B848894_5397_1657_41D3_C8A0009D2D03_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4B848894_5397_1657_41D3_C8A0009D2D03_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4B848894_5397_1657_41D3_C8A0009D2D03_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4B848894_5397_1657_41D3_C8A0009D2D03_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4B848894_5397_1657_41D3_C8A0009D2D03_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4B848894_5397_1657_41D3_C8A0009D2D03_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4B848894_5397_1657_41D3_C8A0009D2D03_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4B848894_5397_1657_41D3_C8A0009D2D03_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4B848894_5397_1657_41D3_C8A0009D2D03_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "P _ 008",
 "id": "panorama_4B848894_5397_1657_41D3_C8A0009D2D03",
 "hfov": 360,
 "overlays": [
  "this.overlay_456F9960_5396_F6EE_4187_BECAC1686404",
  "this.overlay_450773E6_5391_19F2_41C4_35209F20D2AD",
  "this.panorama_4B848894_5397_1657_41D3_C8A0009D2D03_tcap0"
 ],
 "pitch": 0,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -86.42,
   "yaw": 38.19,
   "panorama": "this.panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_4B848894_5397_1657_41D3_C8A0009D2D03_t.jpg"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46A8FE2A_5391_2A72_41AD_F3702922E87D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_46A8FE2A_5391_2A72_41AD_F3702922E87D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46A8FE2A_5391_2A72_41AD_F3702922E87D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_46A8FE2A_5391_2A72_41AD_F3702922E87D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46A8FE2A_5391_2A72_41AD_F3702922E87D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_46A8FE2A_5391_2A72_41AD_F3702922E87D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46A8FE2A_5391_2A72_41AD_F3702922E87D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_46A8FE2A_5391_2A72_41AD_F3702922E87D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46A8FE2A_5391_2A72_41AD_F3702922E87D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_46A8FE2A_5391_2A72_41AD_F3702922E87D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46A8FE2A_5391_2A72_41AD_F3702922E87D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_46A8FE2A_5391_2A72_41AD_F3702922E87D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_46A8FE2A_5391_2A72_41AD_F3702922E87D_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "P _ 007",
 "id": "panorama_46A8FE2A_5391_2A72_41AD_F3702922E87D",
 "hfov": 360,
 "overlays": [
  "this.overlay_464616C7_539F_1A32_41B9_C1F9F5E71E58",
  "this.overlay_45E6E4DA_539F_1FD3_41CA_A4A615DE8DC5",
  "this.overlay_463BEDE7_539F_29F1_41C4_80CEFB6A3CD4",
  "this.overlay_4674162F_5391_3A72_419B_72A022D87094",
  "this.panorama_46A8FE2A_5391_2A72_41AD_F3702922E87D_tcap0"
 ],
 "pitch": 0,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 85.67,
   "yaw": -63.06,
   "panorama": "this.panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_59D73143_5391_611E_41AA_19277E417F49"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_46A8FE2A_5391_2A72_41AD_F3702922E87D_t.jpg"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "P _ 004",
 "id": "panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9",
 "hfov": 360,
 "overlays": [
  "this.overlay_5D02E558_53B3_212A_41B7_D9DBC0501103",
  "this.overlay_5DF3941D_53B3_1E51_41CE_57B5709873A3",
  "this.overlay_5D82C00F_53B1_F631_41A3_416BC029DE8C",
  "this.overlay_5D112754_53B7_3AD6_41D4_A1A162A08FFA",
  "this.overlay_43957F22_5391_EA72_41BB_EE45C9A7D4E5",
  "this.overlay_43D71539_5391_7E5E_41C8_71DAAFDD5AF7",
  "this.overlay_46175254_5391_1AD6_41AE_5490BE50316B",
  "this.panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9_tcap0"
 ],
 "pitch": 0,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -63.06,
   "yaw": 85.67,
   "panorama": "this.panorama_46A8FE2A_5391_2A72_41AD_F3702922E87D",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 97.22,
   "yaw": -84.66,
   "panorama": "this.panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 146.09,
   "yaw": -27.89,
   "panorama": "this.panorama_59D73143_5391_611E_41AA_19277E417F49",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 27.51,
   "yaw": -149.48,
   "panorama": "this.panorama_59D22582_5391_611E_41BF_A8CE6B760F0D",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_49D1E825_5371_1676_4188_58B75D12DBAF",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -163.29,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58F1B4D8_5391_272A_41B9_5894099B5EAF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58F1B4D8_5391_272A_41B9_5894099B5EAF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58F1B4D8_5391_272A_41B9_5894099B5EAF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58F1B4D8_5391_272A_41B9_5894099B5EAF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58F1B4D8_5391_272A_41B9_5894099B5EAF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58F1B4D8_5391_272A_41B9_5894099B5EAF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58F1B4D8_5391_272A_41B9_5894099B5EAF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58F1B4D8_5391_272A_41B9_5894099B5EAF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58F1B4D8_5391_272A_41B9_5894099B5EAF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58F1B4D8_5391_272A_41B9_5894099B5EAF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58F1B4D8_5391_272A_41B9_5894099B5EAF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58F1B4D8_5391_272A_41B9_5894099B5EAF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_58F1B4D8_5391_272A_41B9_5894099B5EAF_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "P _ 001",
 "id": "panorama_58F1B4D8_5391_272A_41B9_5894099B5EAF",
 "hfov": 360,
 "overlays": [
  "this.overlay_5C2B1BAA_5397_2A73_41C1_6B07B1BBB345",
  "this.overlay_43992695_5397_FA56_41CD_200519C5C853",
  "this.panorama_58F1B4D8_5391_272A_41B9_5894099B5EAF_tcap0"
 ],
 "pitch": 0,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -74.11,
   "yaw": 119.96,
   "panorama": "this.panorama_59D73143_5391_611E_41AA_19277E417F49",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_58F1B4D8_5391_272A_41B9_5894099B5EAF_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_49B0283B_5371_1652_41CF_6C166FFD2B15",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 152.11,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4A0B7805_5371_1636_41CD_CDACB65A0232",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -33.91,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4A1327ED_5371_19F6_41D1_E0D58A452514",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 116.94,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_58F1B4D8_5391_272A_41B9_5894099B5EAF_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "MapPlayer",
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "movementMode": "constrained"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_59D73143_5391_611E_41AA_19277E417F49_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_49928851_5371_162E_41B6_E0C9DD9E532E",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 30.52,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem",
   "media": "this.map_42382952_53F3_16D2_41C3_9680B6F13AFA",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_4A73C791_5371_1A2E_41BF_A69702C745A8"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_59D22582_5391_611E_41BF_A8CE6B760F0D_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4A2647E3_5371_19F2_41CC_BB39066FECE2",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 93.58,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4982585C_5371_16D6_4190_CDEBD1A7C22F",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 30.52,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem",
   "media": "this.map_42382952_53F3_16D2_41C3_9680B6F13AFA",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_4A706791_5371_1A2E_41D1_DDF10C679C0A"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4A64F7A1_5371_1A6E_41D4_8C78A79FDD65",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -94.33,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_49C18830_5371_166E_41AD_C6CA6FBFEBD2",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -60.04,
  "pitch": 0
 }
},
{
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_acceleration",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "P _ 005",
 "id": "panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E",
 "hfov": 360,
 "overlays": [
  "this.overlay_5C0A33E3_5391_39F2_41D3_4107B73F8616",
  "this.overlay_4381959C_5391_1E56_41AA_3B4009057673",
  "this.overlay_42DF7064_5391_16F6_41D1_1544B26C18DC",
  "this.overlay_43F6E41C_5393_1E56_41CA_601CDC808C74",
  "this.overlay_42A056FA_53F3_1BD2_41CB_A8241671AFAB",
  "this.overlay_4218779F_53F3_1A52_41C5_9D4E7F1B9CA5",
  "this.overlay_40362C52_53F1_2ED2_41D3_641BA1066212",
  "this.overlay_4AED0C40_5397_EE2E_41D0_73CE42B5C03A",
  "this.overlay_4500E167_5397_36F2_41B1_1825D5CFFA28",
  "this.panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_tcap0"
 ],
 "pitch": 0,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -84.66,
   "yaw": 97.22,
   "panorama": "this.panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 38.19,
   "yaw": -86.42,
   "panorama": "this.panorama_4B848894_5397_1657_41D3_C8A0009D2D03",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -128.37,
   "yaw": 16.71,
   "panorama": "this.panorama_59D73143_5391_611E_41AA_19277E417F49",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -39.82,
   "yaw": 160.78,
   "panorama": "this.panorama_59D22582_5391_611E_41BF_A8CE6B760F0D",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -39.82,
   "yaw": -162.29,
   "panorama": "this.panorama_59D22582_5391_611E_41BF_A8CE6B760F0D",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4A4647C2_5371_1A32_41C3_D1DA7F3FF6D9",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 51.63,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D73143_5391_611E_41AA_19277E417F49_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_59D73143_5391_611E_41AA_19277E417F49_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D73143_5391_611E_41AA_19277E417F49_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_59D73143_5391_611E_41AA_19277E417F49_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D73143_5391_611E_41AA_19277E417F49_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_59D73143_5391_611E_41AA_19277E417F49_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D73143_5391_611E_41AA_19277E417F49_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_59D73143_5391_611E_41AA_19277E417F49_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D73143_5391_611E_41AA_19277E417F49_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_59D73143_5391_611E_41AA_19277E417F49_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D73143_5391_611E_41AA_19277E417F49_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_59D73143_5391_611E_41AA_19277E417F49_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_59D73143_5391_611E_41AA_19277E417F49_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "P _ 002",
 "id": "panorama_59D73143_5391_611E_41AA_19277E417F49",
 "hfov": 360,
 "overlays": [
  "this.overlay_5CFD305C_53B3_16D6_41CB_320878C2DEBA",
  "this.overlay_43D2CD0C_53B1_2E36_41C9_61DCF3C09580",
  "this.overlay_5C89E4FE_53B1_7FD2_41BC_A0F5AF270AD3",
  "this.overlay_43C6EBF3_53AF_29D2_41D2_4CF07B60C4FD",
  "this.overlay_5C060E03_53AF_6A32_417D_2EBA55916C1E",
  "this.overlay_5C6F367C_5392_FAD6_41B8_B4F5426E6C75",
  "this.overlay_43AC6EBD_5391_6A51_41D1_DF8E26359C83",
  "this.panorama_59D73143_5391_611E_41AA_19277E417F49_tcap0"
 ],
 "pitch": 0,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 16.71,
   "yaw": -128.37,
   "panorama": "this.panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 119.96,
   "yaw": -74.11,
   "panorama": "this.panorama_58F1B4D8_5391_272A_41B9_5894099B5EAF",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -27.89,
   "yaw": 146.09,
   "panorama": "this.panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -27.89,
   "yaw": -163.04,
   "panorama": "this.panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_59D73143_5391_611E_41AA_19277E417F49_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4A5B67B7_5371_1A52_41BC_B25476AD0D80",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -141.81,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_49A03845_5371_1636_41C6_259402B7CB5B",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 152.11,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4B848894_5397_1657_41D3_C8A0009D2D03_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4A1C37F8_5371_19DE_41B5_B65010A7FA0E",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -82.78,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_49F7D810_5371_162E_41C1_DC6B174CAF4C",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -152.49,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "camera": "this.panorama_59D22582_5391_611E_41BF_A8CE6B760F0D_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_59D22582_5391_611E_41BF_A8CE6B760F0D",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_59D73143_5391_611E_41AA_19277E417F49_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_59D73143_5391_611E_41AA_19277E417F49",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4B848894_5397_1657_41D3_C8A0009D2D03_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_4B848894_5397_1657_41D3_C8A0009D2D03",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_58F1B4D8_5391_272A_41B9_5894099B5EAF_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_58F1B4D8_5391_272A_41B9_5894099B5EAF",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_46A8FE2A_5391_2A72_41AD_F3702922E87D_camera",
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
   "media": "this.panorama_46A8FE2A_5391_2A72_41AD_F3702922E87D",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4A3B17D8_5371_19DE_41D2_87D39F8396D1",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 140.18,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4A5207AC_5371_1A76_41C3_07D851F2EDED",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 95.34,
  "pitch": 0
 }
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "MainViewer",
 "left": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "paddingLeft": 0,
 "borderSize": 0,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minHeight": 50,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "toolTipOpacity": 0.5,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 6,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "class": "ViewerArea",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "paddingRight": 0,
 "progressOpacity": 1,
 "top": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "backgroundOpacity": 0,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "paddingBottom": 0,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minHeight": 1,
 "top": "0%",
 "height": 641,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--SETTINGS"
 },
 "shadow": false,
 "visible": false
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "children": [
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "class": "Container",
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minHeight": 1,
 "height": 118,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": 0,
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--MENU"
 },
 "shadow": false,
 "backgroundOpacity": 0.64
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "MapViewer",
 "left": "0.06%",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "24.125%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "paddingLeft": 0,
 "borderSize": 0,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "minWidth": 1,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "height": "37.622%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 6,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "class": "ViewerArea",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "paddingRight": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "bottom": "7.14%",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "progressBottom": 2,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 },
 "toolTipBorderSize": 1,
 "visible": false,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A",
 "left": "2.11%",
 "width": "12.364%",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingBottom": 10,
 "class": "HTMLText",
 "paddingLeft": 10,
 "borderSize": 3,
 "paddingRight": 10,
 "minHeight": 1,
 "top": "5.19%",
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "height": "6.811%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;font-family:'Montserrat Medium';\"><B>ENTRANCE</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "Entrance"
 },
 "shadow": false,
 "visible": false
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_77FFE780_68A3_305F_4195_72CF03F77028",
 "left": "2.11%",
 "width": "12.364%",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingBottom": 10,
 "class": "HTMLText",
 "paddingLeft": 10,
 "borderSize": 3,
 "paddingRight": 10,
 "minHeight": 1,
 "top": "5.19%",
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "height": "6.811%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>Living Room</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "Living Room"
 },
 "shadow": false,
 "visible": false
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E",
 "left": "2.11%",
 "width": "12.364%",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingBottom": 10,
 "class": "HTMLText",
 "paddingLeft": 10,
 "borderSize": 3,
 "paddingRight": 10,
 "minHeight": 1,
 "top": "5.19%",
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "height": "6.811%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>Kitchen</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "Kitchen"
 },
 "shadow": false,
 "visible": false
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16",
 "left": "2.11%",
 "width": "12.364%",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingBottom": 10,
 "class": "HTMLText",
 "paddingLeft": 10,
 "borderSize": 3,
 "paddingRight": 10,
 "minHeight": 1,
 "top": "5.19%",
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "height": "6.811%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>Bedroom 1</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "Bedroom 1"
 },
 "shadow": false,
 "visible": false
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431",
 "left": "2.11%",
 "width": "12.364%",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingBottom": 10,
 "class": "HTMLText",
 "paddingLeft": 10,
 "borderSize": 3,
 "paddingRight": 10,
 "minHeight": 1,
 "top": "5.19%",
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "height": "6.811%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>Bedroom 2</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "Bedroom 2"
 },
 "shadow": false,
 "visible": false
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A",
 "left": "2.11%",
 "width": "12.364%",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingBottom": 10,
 "class": "HTMLText",
 "paddingLeft": 10,
 "borderSize": 3,
 "paddingRight": 10,
 "minHeight": 1,
 "top": "5.19%",
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "height": "6.811%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>Bathroom</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "Bathroom"
 },
 "shadow": false,
 "visible": false
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "maxHeight": 58,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "width": 58,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "height": 58,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "maxHeight": 58,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "width": 58,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "height": 58,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9, this.camera_49928851_5371_162E_41B6_E0C9DD9E532E); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 27.51,
   "hfov": 39.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D22582_5391_611E_41BF_A8CE6B760F0D_0_HS_0_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 152,
      "height": 180
     }
    ]
   },
   "pitch": 0.37
  }
 ],
 "id": "overlay_5EA2CC9F_53B2_E726_41CA_282516FCD5C3",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_4174B035_5391_1656_41D2_06616922EEF4",
   "yaw": 29.63,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -5.29,
   "distance": 100,
   "hfov": 5.31
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9, this.camera_4982585C_5371_16D6_4190_CDEBD1A7C22F); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 29.63,
   "hfov": 5.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D22582_5391_611E_41BF_A8CE6B760F0D_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.29
  }
 ],
 "id": "overlay_5EF8F2FC_53B3_20EA_41D1_C82132502126",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E, this.camera_44D548B1_5371_166E_4173_9C3244751580); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.82,
   "hfov": 50.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D22582_5391_611E_41BF_A8CE6B760F0D_0_HS_2_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 189
     }
    ]
   },
   "pitch": -1.82
  }
 ],
 "id": "overlay_43E01D45_5391_2E36_41CB_A690F28AD7F6",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_4174D03B_5391_1652_41D1_189CB4F646F0",
   "yaw": -40.88,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -4.46,
   "distance": 100,
   "hfov": 3.99
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9, this.camera_498D2867_5371_16F2_41C0_4D469CBCA3BD); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -40.88,
   "hfov": 3.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D22582_5391_611E_41BF_A8CE6B760F0D_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.46
  }
 ],
 "id": "overlay_42115932_5391_3652_41AC_7F9F0F711A3F",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_59D22582_5391_611E_41BF_A8CE6B760F0D_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 500,
    "height": 500
   }
  ]
 },
 "rotate": false,
 "id": "panorama_59D22582_5391_611E_41BF_A8CE6B760F0D_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E, this.camera_4A2647E3_5371_19F2_41CC_BB39066FECE2); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 38.19,
   "hfov": 71.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4B848894_5397_1657_41D3_C8A0009D2D03_1_HS_0_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 179
     }
    ]
   },
   "pitch": 1.08
  }
 ],
 "id": "overlay_456F9960_5396_F6EE_4187_BECAC1686404",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_4873B23D_5393_7A56_41D1_EC023153A815",
   "yaw": 43.01,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -0.69,
   "distance": 100,
   "hfov": 6.67
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 43.01,
   "hfov": 6.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4B848894_5397_1657_41D3_C8A0009D2D03_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.69
  }
 ],
 "id": "overlay_450773E6_5391_19F2_41C4_35209F20D2AD",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_4B848894_5397_1657_41D3_C8A0009D2D03_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 500,
    "height": 500
   }
  ]
 },
 "rotate": false,
 "id": "panorama_4B848894_5397_1657_41D3_C8A0009D2D03_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9, this.camera_4A64F7A1_5371_1A6E_41D4_8C78A79FDD65); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -63.06,
   "hfov": 98.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46A8FE2A_5391_2A72_41AD_F3702922E87D_1_HS_0_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 131
     }
    ]
   },
   "pitch": 2.18
  }
 ],
 "id": "overlay_464616C7_539F_1A32_41B9_C1F9F5E71E58",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_495C1D2E_5391_2E72_41D1_B6A4AB35AB98",
   "yaw": -44.6,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -1.18,
   "distance": 100,
   "hfov": 4
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -44.6,
   "hfov": 4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46A8FE2A_5391_2A72_41AD_F3702922E87D_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.18
  }
 ],
 "id": "overlay_45E6E4DA_539F_1FD3_41CA_A4A615DE8DC5",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 29.64,
   "hfov": 58.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46A8FE2A_5391_2A72_41AD_F3702922E87D_1_HS_2_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 154,
      "height": 200
     }
    ]
   },
   "pitch": 3.83
  }
 ],
 "id": "overlay_463BEDE7_539F_29F1_41C4_80CEFB6A3CD4",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_495DAD2E_5391_2E72_41B6_0AC128A374B9",
   "yaw": 37.94,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -0.56,
   "distance": 100,
   "hfov": 4
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 37.94,
   "hfov": 4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46A8FE2A_5391_2A72_41AD_F3702922E87D_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.56
  }
 ],
 "id": "overlay_4674162F_5391_3A72_419B_72A022D87094",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_59D22582_5391_611E_41BF_A8CE6B760F0D_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 500,
    "height": 500
   }
  ]
 },
 "rotate": false,
 "id": "panorama_46A8FE2A_5391_2A72_41AD_F3702922E87D_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_59D73143_5391_611E_41AA_19277E417F49, this.camera_4A0B7805_5371_1636_41CD_CDACB65A0232); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -27.89,
   "hfov": 54.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9_0_HS_0_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 190,
      "height": 200
     }
    ]
   },
   "pitch": 4.08
  }
 ],
 "id": "overlay_5D02E558_53B3_212A_41B7_D9DBC0501103",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_59D22582_5391_611E_41BF_A8CE6B760F0D, this.camera_49F7D810_5371_162E_41C1_DC6B174CAF4C); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -149.48,
   "hfov": 61.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9_0_HS_1_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 174
     }
    ]
   },
   "pitch": -3.47
  }
 ],
 "id": "overlay_5DF3941D_53B3_1E51_41CE_57B5709873A3",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_47CB3748_53F1_7A3E_41D2_A13B150DE614",
   "yaw": -170.98,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 0.41,
   "distance": 100,
   "hfov": 4
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.98,
   "hfov": 4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.41
  }
 ],
 "id": "overlay_5D82C00F_53B1_F631_41A3_416BC029DE8C",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_47CB7749_53F1_7A3E_419D_D905BCC4AF3D",
   "yaw": -19.23,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -4.61,
   "distance": 100,
   "hfov": 3.99
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -19.23,
   "hfov": 3.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.61
  }
 ],
 "id": "overlay_5D112754_53B7_3AD6_41D4_A1A162A08FFA",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E, this.camera_4A1C37F8_5371_19DE_41B5_B65010A7FA0E); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -84.66,
   "hfov": 70.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9_0_HS_4_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 72
     }
    ]
   },
   "pitch": -0.36
  }
 ],
 "id": "overlay_43957F22_5391_EA72_41BB_EE45C9A7D4E5",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_47CB8749_53F1_7A3E_41CA_9268BD982495",
   "yaw": -94.1,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 0.84,
   "distance": 100,
   "hfov": 4
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -94.1,
   "hfov": 4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.84
  }
 ],
 "id": "overlay_43D71539_5391_7E5E_41C8_71DAAFDD5AF7",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_46A8FE2A_5391_2A72_41AD_F3702922E87D, this.camera_4A1327ED_5371_19F6_41D1_E0D58A452514); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9_0_HS_6_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9_0_HS_6_2_1_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9_0_HS_6_3_2_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9_0_HS_6_4_4_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9_0_HS_6_5_5_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "id": "overlay_46175254_5391_1AD6_41AE_5490BE50316B",
 "data": {
  "label": "Polygon"
 }
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_59D22582_5391_611E_41BF_A8CE6B760F0D_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 500,
    "height": 500
   }
  ]
 },
 "rotate": false,
 "id": "panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_59D73143_5391_611E_41AA_19277E417F49, this.camera_49E1B81B_5371_1652_41A8_230F58C90EC4); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 119.96,
   "hfov": 98.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58F1B4D8_5391_272A_41B9_5894099B5EAF_0_HS_0_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 174
     }
    ]
   },
   "pitch": -1.75
  }
 ],
 "id": "overlay_5C2B1BAA_5397_2A73_41C1_6B07B1BBB345",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_47CEF74B_53F1_7A32_41C2_1EF6210B5CFD",
   "yaw": 119.45,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -3.19,
   "distance": 100,
   "hfov": 3.99
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 119.45,
   "hfov": 3.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58F1B4D8_5391_272A_41B9_5894099B5EAF_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.19
  }
 ],
 "id": "overlay_43992695_5397_FA56_41CD_200519C5C853",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_59D22582_5391_611E_41BF_A8CE6B760F0D_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 500,
    "height": 500
   }
  ]
 },
 "rotate": false,
 "id": "panorama_58F1B4D8_5391_272A_41B9_5894099B5EAF_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "maxHeight": 58,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "width": 58,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "paddingLeft": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingRight": 0,
 "minHeight": 1,
 "height": 58,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "visible": false,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 49,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "maxHeight": 37,
 "paddingBottom": 0,
 "right": 30,
 "propagateClick": true,
 "width": 100,
 "class": "IconButton",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "paddingRight": 0,
 "minHeight": 1,
 "height": 75,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "bottom": 8,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "maxHeight": 58,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "width": 58,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "height": 58,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "maxHeight": 58,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "width": 58,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "height": 58,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_59D73143_5391_611E_41AA_19277E417F49, this.camera_4A4647C2_5371_1A32_41C3_D1DA7F3FF6D9); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 16.71,
   "hfov": 71.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_0_HS_0_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 136
     }
    ]
   },
   "pitch": -0.28
  }
 ],
 "id": "overlay_5C0A33E3_5391_39F2_41D3_4107B73F8616",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_4128CB2B_5391_2A72_41D3_326282ED5A2A",
   "yaw": 26.16,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -4.28,
   "distance": 100,
   "hfov": 5.32
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 26.16,
   "hfov": 5.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.28
  }
 ],
 "id": "overlay_4381959C_5391_1E56_41AA_3B4009057673",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9, this.camera_4A5207AC_5371_1A76_41C3_07D851F2EDED); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 97.22,
   "hfov": 83.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_0_HS_2_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 141
     }
    ]
   },
   "pitch": -6.43
  }
 ],
 "id": "overlay_42DF7064_5391_16F6_41D1_1544B26C18DC",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_41285B2B_5391_2A72_41D3_302964B63ED7",
   "yaw": 112.58,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -2.01,
   "distance": 100,
   "hfov": 5.33
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 112.58,
   "hfov": 5.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.01
  }
 ],
 "id": "overlay_43F6E41C_5393_1E56_41CA_601CDC808C74",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_59D22582_5391_611E_41BF_A8CE6B760F0D, this.camera_4A4FD7CD_5371_1A36_41C1_F74B8678CC4D); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 160.78,
   "hfov": 43.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_0_HS_4_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 100,
      "height": 199
     }
    ]
   },
   "pitch": -11.97
  }
 ],
 "id": "overlay_42A056FA_53F3_1BD2_41CB_A8241671AFAB",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_47F2D435_53F1_3E51_41CF_CE9380A03F7D",
   "yaw": 173.87,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -5.62,
   "distance": 100,
   "hfov": 5.31
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.87,
   "hfov": 5.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.62
  }
 ],
 "id": "overlay_4218779F_53F3_1A52_41C5_9D4E7F1B9CA5",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_59D22582_5391_611E_41BF_A8CE6B760F0D, this.camera_4A3B17D8_5371_19DE_41D2_87D39F8396D1); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -162.29,
   "hfov": 34.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_0_HS_6_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 87,
      "height": 200
     }
    ]
   },
   "pitch": -0.01
  }
 ],
 "id": "overlay_40362C52_53F1_2ED2_41D3_641BA1066212",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4B848894_5397_1657_41D3_C8A0009D2D03, this.camera_4A5B67B7_5371_1A52_41BC_B25476AD0D80); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_0_HS_7_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_0_HS_7_2_2_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_0_HS_7_3_3_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  }
 ],
 "id": "overlay_4AED0C40_5397_EE2E_41D0_73CE42B5C03A",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_4873323C_5393_7A56_41D2_D24D6F81A93D",
   "yaw": -125.09,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 1.67,
   "distance": 100,
   "hfov": 5.33
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -125.09,
   "hfov": 5.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_0_HS_8_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.67
  }
 ],
 "id": "overlay_4500E167_5397_36F2_41B1_1825D5CFFA28",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_59D22582_5391_611E_41BF_A8CE6B760F0D_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 500,
    "height": 500
   }
  ]
 },
 "rotate": false,
 "id": "panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E, this.camera_49D1E825_5371_1676_4188_58B75D12DBAF); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -128.37,
   "hfov": 29.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D73143_5391_611E_41AA_19277E417F49_0_HS_0_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 111,
      "height": 124
     }
    ]
   },
   "pitch": 0.94
  }
 ],
 "id": "overlay_5CFD305C_53B3_16D6_41CB_320878C2DEBA",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9, this.camera_49B0283B_5371_1652_41CF_6C166FFD2B15); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 146.09,
   "hfov": 103.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D73143_5391_611E_41AA_19277E417F49_0_HS_1_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 100,
      "height": 200
     }
    ]
   },
   "pitch": -23.43
  }
 ],
 "id": "overlay_43D2CD0C_53B1_2E36_41C9_61DCF3C09580",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_47CC5749_53F1_7A3E_41C2_FCFA92E386D6",
   "yaw": -131.02,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -2.1,
   "distance": 100,
   "hfov": 4
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -131.02,
   "hfov": 4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D73143_5391_611E_41AA_19277E417F49_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.1
  }
 ],
 "id": "overlay_5C89E4FE_53B1_7FD2_41BC_A0F5AF270AD3",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9, this.camera_49A03845_5371_1636_41C6_259402B7CB5B); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -163.04,
   "hfov": 36.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D73143_5391_611E_41AA_19277E417F49_0_HS_3_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 108,
      "height": 200
     }
    ]
   },
   "pitch": -12.25
  }
 ],
 "id": "overlay_43C6EBF3_53AF_29D2_41D2_4CF07B60C4FD",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_47CCE749_53F1_7A3E_41D2_1AE82AC3D8E3",
   "yaw": -175.99,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -3.19,
   "distance": 100,
   "hfov": 3.99
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -175.99,
   "hfov": 3.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D73143_5391_611E_41AA_19277E417F49_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.19
  }
 ],
 "id": "overlay_5C060E03_53AF_6A32_417D_2EBA55916C1E",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_58F1B4D8_5391_272A_41B9_5894099B5EAF, this.camera_49C18830_5371_166E_41AD_C6CA6FBFEBD2); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -74.11,
   "hfov": 56.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D73143_5391_611E_41AA_19277E417F49_0_HS_5_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 149
     }
    ]
   },
   "pitch": 1.99
  }
 ],
 "id": "overlay_5C6F367C_5392_FAD6_41B8_B4F5426E6C75",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_47CD674A_53F1_7A32_41BC_6AB1AC686945",
   "yaw": -73.99,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -2.6,
   "distance": 100,
   "hfov": 4
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -73.99,
   "hfov": 4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_59D73143_5391_611E_41AA_19277E417F49_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.6
  }
 ],
 "id": "overlay_43AC6EBD_5391_6A51_41D1_DF8E26359C83",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_59D22582_5391_611E_41BF_A8CE6B760F0D_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 500,
    "height": 500
   }
  ]
 },
 "rotate": false,
 "id": "panorama_59D73143_5391_611E_41AA_19277E417F49_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "backgroundOpacity": 0,
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "paddingBottom": 0,
 "class": "Container",
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minHeight": 1,
 "top": "0%",
 "height": 110,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "button menu sup"
 },
 "shadow": false
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC"
 ],
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "paddingBottom": 0,
 "class": "Container",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "width": "91.304%",
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "0%",
 "scrollBarOpacity": 0.5,
 "gap": 3,
 "scrollBarMargin": 2,
 "height": "85.959%",
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0
},
{
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "width": 1199,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "Container",
 "overflow": "scroll",
 "paddingLeft": 30,
 "borderSize": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "height": 51,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "0%",
 "children": [
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0"
 ],
 "gap": 3,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-button set container"
 },
 "shadow": false,
 "backgroundOpacity": 0
},
{
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4174B035_5391_1656_41D2_06616922EEF4",
 "colCount": 4,
 "frameDuration": 41,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_59D22582_5391_611E_41BF_A8CE6B760F0D_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4174D03B_5391_1652_41D1_189CB4F646F0",
 "colCount": 4,
 "frameDuration": 41,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_59D22582_5391_611E_41BF_A8CE6B760F0D_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4873B23D_5393_7A56_41D1_EC023153A815",
 "colCount": 4,
 "frameDuration": 41,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4B848894_5397_1657_41D3_C8A0009D2D03_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_495C1D2E_5391_2E72_41D1_B6A4AB35AB98",
 "colCount": 4,
 "frameDuration": 41,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_46A8FE2A_5391_2A72_41AD_F3702922E87D_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_495DAD2E_5391_2E72_41B6_0AC128A374B9",
 "colCount": 4,
 "frameDuration": 41,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_46A8FE2A_5391_2A72_41AD_F3702922E87D_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_47CB3748_53F1_7A3E_41D2_A13B150DE614",
 "colCount": 4,
 "frameDuration": 41,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_47CB7749_53F1_7A3E_419D_D905BCC4AF3D",
 "colCount": 4,
 "frameDuration": 41,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_47CB8749_53F1_7A3E_41CA_9268BD982495",
 "colCount": 4,
 "frameDuration": 41,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_59D11A6F_5391_63E6_41C4_47AE3BBA27D9_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_47CEF74B_53F1_7A32_41C2_1EF6210B5CFD",
 "colCount": 4,
 "frameDuration": 41,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_58F1B4D8_5391_272A_41B9_5894099B5EAF_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4128CB2B_5391_2A72_41D3_326282ED5A2A",
 "colCount": 4,
 "frameDuration": 41,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_41285B2B_5391_2A72_41D3_302964B63ED7",
 "colCount": 4,
 "frameDuration": 41,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_47F2D435_53F1_3E51_41CF_CE9380A03F7D",
 "colCount": 4,
 "frameDuration": 41,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4873323C_5393_7A56_41D2_D24D6F81A93D",
 "colCount": 4,
 "frameDuration": 41,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_59D1C0FE_5391_60E6_41D3_43D07B58783E_0_HS_8_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_47CC5749_53F1_7A3E_41C2_FCFA92E386D6",
 "colCount": 4,
 "frameDuration": 41,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_59D73143_5391_611E_41AA_19277E417F49_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_47CCE749_53F1_7A3E_41D2_1AE82AC3D8E3",
 "colCount": 4,
 "frameDuration": 41,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_59D73143_5391_611E_41AA_19277E417F49_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_47CD674A_53F1_7A32_41BC_6AB1AC686945",
 "colCount": 4,
 "frameDuration": 41,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_59D73143_5391_611E_41AA_19277E417F49_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "maxHeight": 60,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "width": 60,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "height": 60,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "maxHeight": 58,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "width": 58,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "paddingLeft": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingRight": 0,
 "minHeight": 1,
 "height": 58,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "click": "this.openLink('https://www.instagram.com/ashara_interiors/', '_blank')",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png"
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "rollOverBackgroundOpacity": 0.8,
 "width": 113,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Button",
 "paddingLeft": 0,
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "height": 49,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 12,
 "label": "FLOORPLAN",
 "fontColor": "#FFFFFF",
 "click": "if(!this.MapViewer.get('visible')){ this.setComponentVisibility(this.MapViewer, true, 0, null, null, false) } else { this.setComponentVisibility(this.MapViewer, false, 0, null, null, false) }",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "fontStyle": "normal",
 "shadow": false,
 "data": {
  "name": "Button floorplan"
 },
 "fontWeight": "bold",
 "textDecoration": "none"
}],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getKey": function(key){  return window[key]; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "registerKey": function(key, value){  window[key] = value; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "existsKey": function(key){  return key in window; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } }
 },
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Player468"
 },
 "shadow": false,
 "downloadEnabled": false,
 "vrPolyfillScale": 0.5,
 "height": "100%"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
