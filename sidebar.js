document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('open-sidebar').addEventListener('click', function () {
        document.getElementById('sidebar').classList.add('active');
        document.getElementById('sidebar-overlay').classList.remove('d-none');
    });

    document.getElementById('sidebar-overlay').addEventListener('click', function () {
        document.getElementById('sidebar').classList.remove('active');
        this.classList.add('d-none');
    });
});
