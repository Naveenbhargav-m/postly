import React, { useState } from 'react';
import { Calendar, Clock, Edit, Eye, Image, Instagram, Facebook, Twitter, List, Plus, Trash2, Save, ArrowLeft, X } from 'lucide-react';

const CreatePostSchedule = ({ onSave, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [images, setImages] = useState([]);
  const [platforms, setPlatforms] = useState({
    instagram: false,
    facebook: false,
    twitter: false,
    pinterest: false,
    reddit: false
  });
  const [scheduleTime, setScheduleTime] = useState('');
  const [scheduleDate, setScheduleDate] = useState('');

  const handleTogglePlatform = (platform) => {
    setPlatforms({
      ...platforms,
      [platform]: !platforms[platform]
    });
  };

  const handleImageUpload = (e) => {
    // In a real app, this would handle file uploads
    const newImages = [...images, `/api/placeholder/150/150`];
    setImages(newImages);
  };

  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now().toString(),
      title,
      description,
      tags: tags.split(',').map(tag => tag.trim()),
      images,
      platforms,
      scheduleTime,
      scheduleDate,
      status: 'scheduled'
    };
    onSave(newPost);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 bg-indigo-600 text-white flex justify-between items-center">
        <div className="flex items-center">
          <Calendar className="mr-2" />
          <h1 className="text-xl font-bold">Create New Post Schedule</h1>
        </div>
        <button 
          onClick={onCancel}
          className="p-2 rounded-full hover:bg-indigo-500 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-6">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Post Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter post title"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-32"
            placeholder="Enter post description"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tags">
            Tags (comma separated)
          </label>
          <input
            id="tags"
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="tag1, tag2, tag3"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Images
          </label>
          <div className="flex items-center flex-wrap gap-4 mb-4">
            {images.map((img, index) => (
              <div key={index} className="relative group">
                <img src={img} alt="Preview" className="w-24 h-24 object-cover rounded-md" />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleImageUpload}
              className="w-24 h-24 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md hover:border-indigo-500 transition-colors"
            >
              <Image size={24} className="text-gray-500" />
            </button>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Social Platforms
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            <button
              type="button"
              onClick={() => handleTogglePlatform('instagram')}
              className={`flex items-center justify-center p-3 rounded-md border transition-colors ${
                platforms.instagram 
                  ? 'bg-purple-100 border-purple-500 text-purple-700' 
                  : 'border-gray-300 text-gray-700'
              }`}
            >
              <Instagram size={20} className="mr-2" />
              <span>Instagram</span>
            </button>
            
            <button
              type="button"
              onClick={() => handleTogglePlatform('facebook')}
              className={`flex items-center justify-center p-3 rounded-md border transition-colors ${
                platforms.facebook 
                  ? 'bg-blue-100 border-blue-500 text-blue-700' 
                  : 'border-gray-300 text-gray-700'
              }`}
            >
              <Facebook size={20} className="mr-2" />
              <span>Facebook</span>
            </button>
            
            <button
              type="button"
              onClick={() => handleTogglePlatform('twitter')}
              className={`flex items-center justify-center p-3 rounded-md border transition-colors ${
                platforms.twitter 
                  ? 'bg-sky-100 border-sky-500 text-sky-700' 
                  : 'border-gray-300 text-gray-700'
              }`}
            >
              <Twitter size={20} className="mr-2" />
              <span>Twitter</span>
            </button>
            
            <button
              type="button"
              onClick={() => handleTogglePlatform('pinterest')}
              className={`flex items-center justify-center p-3 rounded-md border transition-colors ${
                platforms.pinterest 
                  ? 'bg-red-100 border-red-500 text-red-700' 
                  : 'border-gray-300 text-gray-700'
              }`}
            >
              <Image size={20} className="mr-2" /> {/* Using Image for Pinterest */}
              <span>Pinterest</span>
            </button>
            
            <button
              type="button"
              onClick={() => handleTogglePlatform('reddit')}
              className={`flex items-center justify-center p-3 rounded-md border transition-colors ${
                platforms.reddit 
                  ? 'bg-orange-100 border-orange-500 text-orange-700' 
                  : 'border-gray-300 text-gray-700'
              }`}
            >
              <List size={20} className="mr-2" /> {/* Using List for Reddit */}
              <span>Reddit</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="scheduleDate">
              Schedule Date
            </label>
            <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-indigo-500 p-3">
              <Calendar size={20} className="text-gray-500 mr-2" />
              <input
                id="scheduleDate"
                type="date"
                value={scheduleDate}
                onChange={(e) => setScheduleDate(e.target.value)}
                className="w-full focus:outline-none"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="scheduleTime">
              Schedule Time
            </label>
            <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-indigo-500 p-3">
              <Clock size={20} className="text-gray-500 mr-2" />
              <input
                id="scheduleTime"
                type="time"
                value={scheduleTime}
                onChange={(e) => setScheduleTime(e.target.value)}
                className="w-full focus:outline-none"
                required
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors flex items-center"
          >
            <Save size={18} className="mr-2" />
            Schedule Post
          </button>
        </div>
      </form>
    </div>
  );
};

const ScheduledPostsList = ({ posts, onEdit, onDelete, onCreateNew }) => {
  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 bg-indigo-600 text-white flex justify-between items-center">
        <h1 className="text-xl font-bold">Scheduled Posts</h1>
        <button 
          onClick={onCreateNew}
          className="px-4 py-2 bg-white text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors flex items-center"
        >
          <Plus size={18} className="mr-2" />
          Create New
        </button>
      </div>

      <div className="p-6">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="mx-auto mb-4 text-gray-400" size={48} />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">No scheduled posts yet</h2>
            <p className="text-gray-500 mb-6">Create your first social media post schedule</p>
            <button 
              onClick={onCreateNew}
              className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors flex items-center mx-auto"
            >
              <Plus size={18} className="mr-2" />
              Create New Post
            </button>
          </div>
        ) : (
          <div className="overflow-hidden rounded-lg border border-gray-200">
            {posts.map((post) => (
              <div key={post.id} className="border-b border-gray-200 last:border-b-0">
                <div className="flex flex-col md:flex-row justify-between p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex-1 mb-4 md:mb-0">
                    <h2 className="font-semibold text-lg mb-1">{post.title}</h2>
                    <p className="text-gray-600 mb-2 line-clamp-2">{post.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {Object.entries(post.platforms).map(([platform, isActive]) => (
                        isActive && (
                          <span key={platform} className="inline-flex items-center px-2 py-1 text-xs rounded-full bg-gray-100">
                            {platform === 'instagram' && <Instagram size={14} className="mr-1 text-purple-600" />}
                            {platform === 'facebook' && <Facebook size={14} className="mr-1 text-blue-600" />}
                            {platform === 'twitter' && <Twitter size={14} className="mr-1 text-sky-600" />}
                            {platform === 'pinterest' && <Image size={14} className="mr-1 text-red-600" />}
                            {platform === 'reddit' && <List size={14} className="mr-1 text-orange-600" />}
                            {platform.charAt(0).toUpperCase() + platform.slice(1)}
                          </span>
                        )
                      ))}
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      <span className="mr-4">{post.scheduleDate}</span>
                      <Clock size={14} className="mr-1" />
                      <span>{post.scheduleTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {post.images.length > 0 && (
                      <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                        <img src={post.images[0]} alt="Post preview" className="h-full w-full object-cover" />
                      </div>
                    )}
                    
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => onEdit(post.id)}
                        className="px-3 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition-colors flex items-center"
                      >
                        <Edit size={14} className="mr-1" />
                        Edit
                      </button>
                      <button
                        onClick={() => onDelete(post.id)}
                        className="px-3 py-1 border border-red-300 rounded text-red-700 hover:bg-red-50 transition-colors flex items-center"
                      >
                        <Trash2 size={14} className="mr-1" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const EditPostSchedule = ({ post, onSave, onCancel }) => {
  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);
  const [tags, setTags] = useState(post.tags.join(', '));
  const [images, setImages] = useState(post.images);
  const [platforms, setPlatforms] = useState(post.platforms);
  const [scheduleTime, setScheduleTime] = useState(post.scheduleTime);
  const [scheduleDate, setScheduleDate] = useState(post.scheduleDate);

  const handleTogglePlatform = (platform) => {
    setPlatforms({
      ...platforms,
      [platform]: !platforms[platform]
    });
  };

  const handleImageUpload = (e) => {
    // In a real app, this would handle file uploads
    const newImages = [...images, `/api/placeholder/150/150`];
    setImages(newImages);
  };

  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = {
      ...post,
      title,
      description,
      tags: tags.split(',').map(tag => tag.trim()),
      images,
      platforms,
      scheduleTime,
      scheduleDate
    };
    onSave(updatedPost);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 bg-indigo-600 text-white flex justify-between items-center">
        <div className="flex items-center">
          <Edit className="mr-2" />
          <h1 className="text-xl font-bold">Edit Post Schedule</h1>
        </div>
        <button 
          onClick={onCancel}
          className="p-2 rounded-full hover:bg-indigo-500 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-6">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Post Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter post title"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-32"
            placeholder="Enter post description"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tags">
            Tags (comma separated)
          </label>
          <input
            id="tags"
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="tag1, tag2, tag3"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Images
          </label>
          <div className="flex items-center flex-wrap gap-4 mb-4">
            {images.map((img, index) => (
              <div key={index} className="relative group">
                <img src={img} alt="Preview" className="w-24 h-24 object-cover rounded-md" />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleImageUpload}
              className="w-24 h-24 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md hover:border-indigo-500 transition-colors"
            >
              <Image size={24} className="text-gray-500" />
            </button>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Social Platforms
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            <button
              type="button"
              onClick={() => handleTogglePlatform('instagram')}
              className={`flex items-center justify-center p-3 rounded-md border transition-colors ${
                platforms.instagram 
                  ? 'bg-purple-100 border-purple-500 text-purple-700' 
                  : 'border-gray-300 text-gray-700'
              }`}
            >
              <Instagram size={20} className="mr-2" />
              <span>Instagram</span>
            </button>
            
            <button
              type="button"
              onClick={() => handleTogglePlatform('facebook')}
              className={`flex items-center justify-center p-3 rounded-md border transition-colors ${
                platforms.facebook 
                  ? 'bg-blue-100 border-blue-500 text-blue-700' 
                  : 'border-gray-300 text-gray-700'
              }`}
            >
              <Facebook size={20} className="mr-2" />
              <span>Facebook</span>
            </button>
            
            <button
              type="button"
              onClick={() => handleTogglePlatform('twitter')}
              className={`flex items-center justify-center p-3 rounded-md border transition-colors ${
                platforms.twitter 
                  ? 'bg-sky-100 border-sky-500 text-sky-700' 
                  : 'border-gray-300 text-gray-700'
              }`}
            >
              <Twitter size={20} className="mr-2" />
              <span>Twitter</span>
            </button>
            
            <button
              type="button"
              onClick={() => handleTogglePlatform('pinterest')}
              className={`flex items-center justify-center p-3 rounded-md border transition-colors ${
                platforms.pinterest 
                  ? 'bg-red-100 border-red-500 text-red-700' 
                  : 'border-gray-300 text-gray-700'
              }`}
            >
              <Image size={20} className="mr-2" /> {/* Using Image for Pinterest */}
              <span>Pinterest</span>
            </button>
            
            <button
              type="button"
              onClick={() => handleTogglePlatform('reddit')}
              className={`flex items-center justify-center p-3 rounded-md border transition-colors ${
                platforms.reddit 
                  ? 'bg-orange-100 border-orange-500 text-orange-700' 
                  : 'border-gray-300 text-gray-700'
              }`}
            >
              <List size={20} className="mr-2" /> {/* Using List for Reddit */}
              <span>Reddit</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="scheduleDate">
              Schedule Date
            </label>
            <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-indigo-500 p-3">
              <Calendar size={20} className="text-gray-500 mr-2" />
              <input
                id="scheduleDate"
                type="date"
                value={scheduleDate}
                onChange={(e) => setScheduleDate(e.target.value)}
                className="w-full focus:outline-none"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="scheduleTime">
              Schedule Time
            </label>
            <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-indigo-500 p-3">
              <Clock size={20} className="text-gray-500 mr-2" />
              <input
                id="scheduleTime"
                type="time"
                value={scheduleTime}
                onChange={(e) => setScheduleTime(e.target.value)}
                className="w-full focus:outline-none"
                required
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors flex items-center"
          >
            <Save size={18} className="mr-2" />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

// Main App component to demonstrate all three screens
const SocialMediaScheduler = () => {
  const [screen, setScreen] = useState('list'); // 'list', 'create', 'edit'
  const [posts, setPosts] = useState([
    {
      id: '1',
      title: 'Summer Sale Announcement',
      description: 'Announcing our summer sale with 50% off on all products. Limited time offer!',
      tags: ['sale', 'summer', 'discount'],
      images: ['/api/placeholder/150/150'],
      platforms: {
        instagram: true,
        facebook: true,
        twitter: true,
        pinterest: false,
        reddit: false
      },
      scheduleDate: '2025-04-15',
      scheduleTime: '09:00',
      status: 'scheduled'
    },
    {
      id: '2',
      title: 'New Product Launch',
      description: 'Introducing our newest product line! Check out the amazing features.',
      tags: ['new', 'product', 'launch'],
      images: ['/api/placeholder/150/150', '/api/placeholder/150/150'],
      platforms: {
        instagram: true,
        facebook: true,
        twitter: false,
        pinterest: true,
        reddit: false
      },
      scheduleDate: '2025-04-20',
      scheduleTime: '14:30',
      status: 'scheduled'
    }
  ]);
  const [currentPost, setCurrentPost] = useState(null);

  const handleSavePost = (post) => {
    if (screen === 'create') {
      setPosts([...posts, post]);
    } else if (screen === 'edit') {
      setPosts(posts.map(p => p.id === post.id ? post : p));
    }
    setScreen('list');
  };

  const handleEditPost = (postId) => {
    const postToEdit = posts.find(post => post.id === postId);
    setCurrentPost(postToEdit);
    setScreen('edit');
  };

  const handleDeletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {screen === 'list' && (
        <ScheduledPostsList 
          posts={posts} 
          onEdit={handleEditPost} 
          onDelete={handleDeletePost} 
          onCreateNew={() => setScreen('create')} 
        />
      )}
      
      {screen === 'create' && (
        <CreatePostSchedule 
          onSave={handleSavePost} 
          onCancel={() => setScreen('list')} 
        />
      )}
      
      {screen === 'edit' && currentPost && (
        <EditPostSchedule 
          post={currentPost} 
          onSave={handleSavePost} 
          onCancel={() => setScreen('list')} 
        />
      )}
    </div>
  );
};

export default SocialMediaScheduler;