document.addEventListener('DOMContentLoaded', () => {

  // ---- Copy invite link functionality ----
  const copyBtn = document.getElementById('copyInviteBtn');
  const toast = document.getElementById('discordToast');
  let toastTimeout;

  if (copyBtn) {
    const originalHTML = copyBtn.innerHTML;

    copyBtn.addEventListener('click', async () => {
      const link = 'https://' + copyBtn.dataset.invite;

      try {
        await navigator.clipboard.writeText(link);
      } catch (err) {
        const temp = document.createElement('textarea');
        temp.value = link;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
      }

      copyBtn.classList.add('copied');
      copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied';

      if (toast) {
        clearTimeout(toastTimeout);
        toast.classList.add('show');
        toastTimeout = setTimeout(() => toast.classList.remove('show'), 2500);
      }

      setTimeout(() => {
        copyBtn.classList.remove('copied');
        copyBtn.innerHTML = originalHTML;
      }, 2000);
    });
  }

});