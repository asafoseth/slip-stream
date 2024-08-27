<!-- src/routes/+layout.svelte -->
<script>
   // Here we can add any script needed for layout, like state or props
</script>

<style>
   .dashboard-container {
      display: flex;
      height: 100vh;
   }

   .sidebar {
      width: 250px;
      background-color: #333;
      color: white;
      padding: 20px;
   }

   .content {
      flex-grow: 1;
      padding: 20px;
      background-color: #f4f4f4;
   }

   .nav-link {
      color: white;
      display: block;
      margin-bottom: 10px;
      text-decoration: none;
   }

   .nav-link:hover {
      text-decoration: underline;
   }
</style>

<div class="dashboard-container">
   <nav class="sidebar">
      <a href="/" class="nav-link">Home</a>
      <a href="/create" class="nav-link">Create Entry</a>
      <a href="/read" class="nav-link">View Entries</a>
      <!-- Additional nav links can be added here -->
   </nav>
   <div class="content">
      <slot />
   </div>
</div>
