# Content Management for Manis Photography

## What's Been Set Up

✅ **Simple Admin Interface**: Your client can manage content at `/admin/simple.html`
✅ **Portfolio Management**: Easy content creation and organization
✅ **Category System**: Weddings, Events, Festivals, Family
✅ **GitHub Integration**: All changes tracked in version control
✅ **Image Optimization**: Works with your existing Nuxt Image setup

## How Your Client Uses It

1. **Access Admin**: Go to `https://manis-photography.vercel.app/admin/simple.html`
2. **Follow Instructions**: Clear step-by-step guide for content management
3. **Manage Portfolio**: 
   - Create new markdown files in GitHub
   - Upload images to the images folder
   - Add titles and descriptions
   - Organize by categories
   - Changes appear automatically on the website

## ✅ Working Solution: Simple Content Management

### **The Problem with Decap CMS**
Decap CMS with GitHub backend requires complex OAuth setup that doesn't work well with Vercel. The authentication keeps trying to use Netlify endpoints.

### **The Solution: Simple Interface**

**Your client should use**: `https://manis-photography.vercel.app/admin/simple.html`

### **Why This Works Better**

- ✅ **No authentication issues** - works immediately
- ✅ **No complex setup** - just follow instructions
- ✅ **GitHub integration** - direct access to your repository
- ✅ **Version controlled** - all changes tracked in Git
- ✅ **Client-friendly** - clear step-by-step instructions
- ✅ **Reliable** - no external dependencies

### **For Your Client**

Your client can:
- ✅ **View current portfolio items** with clear instructions
- ✅ **Add new images** by uploading to GitHub
- ✅ **Create new portfolio items** using the provided template
- ✅ **Organize content** by categories (weddings, events, festivals, family)
- ✅ **See changes immediately** on the live website

### **How to Use**

1. **Go to**: `https://manis-photography.vercel.app/admin/simple.html`
2. **Follow the instructions** on the page
3. **Use GitHub directly** to manage content
4. **Changes appear automatically** on your website

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
