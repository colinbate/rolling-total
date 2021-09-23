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

function whereami() {
  if(!navigator.geolocation) {
    status = 'Geolocation is not supported by your browser';
  } else {
    status = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }
}
</script>
<div class="">
  {#if status}
  <p>{status}</p>
  {:else}
  <button type="button" class="bg-svelte py-1 px-2 rounded" on:click={whereami}>Where Am I?</button>
  {/if}
  {#if coords}
    <a href="{link}">{coords}</a>
  {/if}
</div>