<script lang="ts">
let status = '';
let link: string | undefined;
let coords: string | undefined;

function success(position) {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;

  status = 'Success';
  link = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  coords = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
}

function error() {
  status = 'Unable to retrieve your location';
}

if(!navigator.geolocation) {
  status = 'Geolocation is not supported by your browser';
} else {
  status = 'Locating…';
  navigator.geolocation.getCurrentPosition(success, error);
}
</script>
<div class="">
  <p>{status}</p>
  {#if coords}
    <a href="{link}">{coords}</a>
  {/if}
</div>