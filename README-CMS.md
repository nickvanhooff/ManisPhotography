# Decap CMS Setup for Manis Photography

## What's Been Set Up

✅ **Admin Interface**: Your client can now manage content at `/admin`
✅ **Portfolio Management**: Easy image upload and organization
✅ **Category System**: Weddings, Events, Festivals, Family
✅ **Image Optimization**: Works with your existing Nuxt Image setup

## How Your Client Uses It

1. **Access Admin**: Go to `https://your-domain.vercel.app/admin`
2. **Login**: Uses GitHub authentication (one-time setup required)
3. **Manage Portfolio**: 
   - Upload new images
   - Add titles and descriptions
   - Organize by categories
   - Set featured images
   - Reorder with drag & drop

## Setup Steps for Vercel

### 1. Enable Git Gateway (One-time setup)

You need to enable Git Gateway in your Vercel project:

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Functions
4. Enable "Git Gateway" (this allows Decap CMS to commit to your repo)

### 2. Update Domain in Config

Edit `public/admin/config.yml` and replace:
```yaml
site_url: https://your-domain.vercel.app
display_url: https://your-domain.vercel.app
```

With your actual Vercel domain.

### 3. First Login Setup

When your client first visits `/admin`:
1. Click "Login with GitHub"
2. Authorize the app
3. That's it! They can now manage content

## File Structure

```
content/
  portfolio/          # Individual portfolio items
    wedding-1.md
    festival-1.md
    event-1.md
public/
  admin/             # CMS interface
    index.html
    config.yml
  images/            # Uploaded images (managed by CMS)
```

## Benefits

- ✅ **Free forever** - No monthly costs
- ✅ **Version controlled** - All changes tracked in Git
- ✅ **Client-friendly** - Simple interface for non-technical users
- ✅ **Works with Vercel** - No hosting changes needed
- ✅ **Image optimization** - Integrates with your Nuxt Image setup
- ✅ **Real-time updates** - Changes appear on your site immediately

## Next Steps

1. Deploy to Vercel
2. Update the domain in config.yml
3. Test the admin interface
4. Train your client on how to use it

Your client will love how easy it is to manage their portfolio!
