---
layout: post
title: Squaring the circle
permalink: /posts/squaring-the-circle
date: 2021-04-16 18:00:00
---

Mathematics is an active discipline! Whenever you see a question written in this style, I encourage that you attempt to solve it! Clicking the question will reveal the answer.
{: class="exercisetoggledummy" style="margin-bottom:30px;"}

When someone tries to _square the circle_, it means that they are trying to accomplish a seemingly impossible feat. But what is this circle squaring all about, and is it really that difficult? In this blog post we're going to explore this beautiful math problem that stumbled the ancient greeks, and we will show how the concept of _field extensions_ provides a beautiful answer.

### The problem

We start with a given circle of area $$A$$, and the goal is to obtain a square with the same area $$A$$.

![Description of the problem]({{site.base_url}} {% link images/posts/squaring-the-circle/problem.png %})
{: style="width: 700px; margin-left: auto; margin-right: auto; display:block;"}

But this should be easy! If the first circle has radius $$r$$, then the area is $$A = \pi r^2$$, and so we just need a square with side length $$l = \sqrt{\pi}r$$, so that $$l^2 = A$$, right? It turns out the problem is not so simple, as there are some rules on what lengths are we allowed to construct.

### The rules

Ancient greeks wondered if one could obtain the desired square by _only using ruler and compass_. This means that, from a given set of points (in this case, the center of the circle and a point on the circle itself, so that their distance is the radius), we can only construct some of the remaining points in the plane (hopefully, the desired square vertices). So, what exactly are we allowed to do? Let's suppose we start with just these two points in the plane:

![Starting points]({{site.base_url}} {% link images/posts/squaring-the-circle/starting_points.png %}) 
{: style="width: 400px; margin-left: auto; margin-right: auto; display:block;"}

One of the two points has been assigned the role of the _origin point_, and identified with $$(0,0)$$, and the other one serves as a way of defining a _unit length_, which is the distance between the two points. We then are allowed to perform the following operations:

- **Ruler operation**: Given two points, trace the straight line that passes through them.
- **Compass operation**: Given three points, $$P$$, $$Q$$ and $$R$$, trace the circumference centered at $$P$$ with radius the distance between $$Q$$ and $$R$$.

With these two operations, **any intersection point of straight lines and/or circumferences we can trace becomes part of our working point collection.** If we start with the two aforementioned points, what can we reach? Can we get the vertices of the desired square? We'll dive into the answer step by step.

### Building the constructible points

The first points that we can secure are those on the $$X$$ axis that have an integer coordinate. That is, points of the form $$(n,0)$$ where $$n \in \mathbb{Z}$$. All we need to do is trace the $$X$$ axis by using our ruler with the starting points, and then, construct a circumference of unit radius centered at $$(1,0)$$. This circumference will produce $$(2,0)$$, and we can keep iterating this process to get every point:

![Constructing the integers]({{site.base_url}} {% link images/posts/squaring-the-circle/buildingz.png %}) 
{: style="width: 400px; margin-left: auto; margin-right: auto; display:block;"}

As such, we obtain any integer distance $$z \in \mathbb{Z}$$, between points $$(0,0)$$ and $$(z,0)$$. However, we still face two major problems: for the desired square, we'd want a non-integer distance to appear (remember, the side length needs to be $$l = \sqrt{\pi}r$$), and we've yet to obtain a point that's not snapped to the X-axis. This second problem is actually easy to solve:

![First 2d point]({{site.base_url}} {% link images/posts/squaring-the-circle/first2dpoint.png %}) 
{: style="width: 400px; margin-left: auto; margin-right: auto; display:block;"}

As you can see, by tracing a unit circle centered at $$(0,0)$$, and another at $$(1,0)$$, they intersect at two new points that neither have an integer distance with the origin, nor lie on the $$X$$-axis. 

Notice that the three marked points in the previous figure form an equilateral triangle. Can you figure out the coordinates of our new point? What is its distance to the origin?
{: class="exercisetoggle"}
The points form a unit-sided equilateral triangle. Hence, the coordinates for the new point need to be $$(\cos \frac{\pi}{3}, \sin \frac{\pi}{3}) = (\frac{1}{2}, \frac{\sqrt 3}{2})$$. Another way of solving this is to realize that the point will have the form $$(\frac{1}{2},y)$$, since it lies in the perpendicular bisector of the segment formed by the other two, and then forcing the distance from this point to the origin to be $$1$$. Obviously, this new point is at distance $$1$$ from the origin, since it lies on the unit circumference centered at $$(0,0)$$.
{: class="exercisesolution"}

### "Parallelizing"

Our quest to reach the largest possible amount of points has to take a quick detour to gather the necessary tools that will allow the search to continue. We're going to see how to obtain parallel and perpendicular lines. Firstly, given two points $$Q_1$$ and $$Q_2$$ that form a line $$l$$, and a third point $$P$$, we want the parallel to $$l$$ through $$P$$, that is, a second point $$P'$$ such that the line connecting $$P$$ and $$P'$$ is parallel to $$l$$. We start by tracing a circumference of radius $$\overline{Q_1Q_2}$$ centered at $$P$$:

![First step of the parallel]({{site.base_url}} {% link images/posts/squaring-the-circle/parallelstep1.png %}) 
{: style="width: 400px; margin-left: auto; margin-right: auto; display:block;"}

Now, we trace a circumference of radius $$\overline{PQ_1}$$ centered at $$Q_2$$:

![Second step of the parallel]({{site.base_url}} {% link images/posts/squaring-the-circle/parallelstep2.png %}) 
{: style="width: 400px; margin-left: auto; margin-right: auto; display:block;"}

They intersect at $$P'$$ with the desired properties!

![Third step of the parallel]({{site.base_url}} {% link images/posts/squaring-the-circle/parallelstep3.png %}) 
{: style="width: 400px; margin-left: auto; margin-right: auto; display:block;"}

Visually, it is clear that the new line is parallel to the previous one. Will this always be true?
{: class="exercisetoggle"}
Yes! Notice that, since $$P'$$ lies on the circumference centered at $$P$$ and with radius $$\overline{Q_1Q_2}$$, then $$\overline{PP'} = \overline{Q_1Q_2}$$. But also, since it lies on the circumference centered at $$Q_2$$ with radius $$\overline{PQ_1}$$, then $$\overline{PQ_1}$$ = $$\overline{P'Q_2}$$, so opposite side lenghts are equal and then $$P, P', Q_1, Q_2$$ form a parallelogram, whose sides are parallel.
{: class="exercisesolution"}

The perpendicular to $$l$$ through $$P$$ is actually very easy. We just need the typical construction of the perpendicular bisector:

![Perpendicular]({{site.base_url}} {% link images/posts/squaring-the-circle/perpendicular.png %}) 
{: style="width: 400px; margin-left: auto; margin-right: auto; display:block;"}

If $$P$$ doesn't lie on the perpendicular bisector, then just use the previously explained parallel procedure to shift it!

[Back to the main page.]({% link index.markdown %})


